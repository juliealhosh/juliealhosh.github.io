import { readFile, readdir, writeFile, mkdir, unlink } from 'fs/promises'
import { join } from 'path'
import { pathToFileURL } from 'url'
import matter from 'gray-matter'
import { transform } from 'esbuild'

const BLOGS_PATH = join(process.cwd(), 'data', 'blog')
const PROJECTS_PATH = join(process.cwd(), 'data', 'projectsData.ts')
const OUT_PATH = join(process.cwd(), 'public', 'static', 'search.json')

async function getPosts() {
  const paths = await readdir(BLOGS_PATH)
  const mdxFiles = paths.filter((path) => path.endsWith('.mdx'))

  const posts = await Promise.all(
    mdxFiles.map(async (path) => {
      const file = await readFile(join(BLOGS_PATH, path), 'utf-8')
      const { data: frontmatter } = matter(file)
      return frontmatter
    })
  )

  const publishedPosts =
    process.env.NODE_ENV === 'production' ? posts.filter((post) => post.draft !== true) : posts

  return publishedPosts
    .map((post) => ({
      title: post.title,
      summary: post.summary || '',
      tags: post.tags || [],
      url: `/blog/${post.slug}`,
      date: post.date,
      type: 'post',
    }))
    .sort((a, b) => b.date.localeCompare(a.date))
}

async function getProjects() {
  const source = await readFile(PROJECTS_PATH, 'utf-8')
  const { code } = await transform(source, { loader: 'ts', format: 'esm' })

  const tempPath = join(process.cwd(), 'data', `.projectsData.${Date.now()}.mjs`)
  await writeFile(tempPath, code)
  let projectsData
  try {
    ;({ default: projectsData } = await import(pathToFileURL(tempPath).href))
  } finally {
    await unlink(tempPath)
  }

  return projectsData
    .filter((project) => project.href)
    .map((project) => ({
      title: project.title,
      summary: project.description || '',
      tags: [],
      url: project.href,
      type: 'project',
    }))
}

async function generateSearchIndex() {
  const [posts, projects] = await Promise.all([getPosts(), getProjects()])
  const index = [...posts, ...projects]

  await mkdir(join(process.cwd(), 'public', 'static'), { recursive: true })
  await writeFile(OUT_PATH, JSON.stringify(index, null, 2))
  console.log(`Search index generated with ${posts.length} posts and ${projects.length} projects.`)
}

generateSearchIndex()
