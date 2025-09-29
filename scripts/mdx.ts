import { readFile, readdir } from 'fs/promises'
import { join } from 'path'
import matter from 'gray-matter'
import { isDraft } from '@/scripts/utils'

// Define the paths to your content directories
const BLOGS_PATH = join(process.cwd(), 'data', 'blog')
const AUTHORS_PATH = join(process.cwd(), 'data', 'authors')

export async function getPostBySlug(slug: string) {
  const postPath = join(BLOGS_PATH, `${slug}.mdx`)
  try {
    const file = await readFile(postPath, 'utf-8')
    const { data: frontmatter, content } = matter(file)

    if (process.env.NODE_ENV === 'production' && isDraft(frontmatter)) {
      return null
    }

    return { mdxContent: content, frontmatter: frontmatter as Post }
  } catch (err) {
    return null
  }
}

export type PostLayoutType =
  | 'PostLayout'
  | 'PostSimple'
  | 'PostProject'
  | 'PostBanner'
  | 'ListLayoutWithTags'

// Define the type for your post data
export interface Post {
  slug: string
  title: string
  date: string
  layout: PostLayoutType
  tags: string[]
  authors?: string[]
  lastmod?: string
  summary?: string
}

export interface Author {
  slug: string
  name: string
  avatar?: string
  occupation?: string
  company?: string
  email?: string
  twitter?: string
  linkedin?: string
  github?: string
}

// Helper function to get all posts for static generation
export async function getAllPosts(): Promise<Post[]> {
  const paths = await readdir(BLOGS_PATH)
  const mdxFiles = paths.filter((path) => path.endsWith('.mdx'))

  const posts = await Promise.all(
    mdxFiles.map(async (path) => {
      const postPath = join(BLOGS_PATH, path)
      const file = await readFile(postPath, 'utf-8')
      const { data: frontmatter } = matter(file)

      return {
        ...(frontmatter as Post), // <-- Cast frontmatter to the Post type
      }
    })
  )

  const filteredPosts =
    process.env.NODE_ENV === 'production' ? posts.filter((post) => !isDraft(post)) : posts

  return filteredPosts.sort((a: any, b: any) => b.date.localeCompare(a.date))
}

// Function to get all authors (optional, only if needed)
export async function getAllAuthors() {
  const paths = await readdir(AUTHORS_PATH)
  const mdxFiles = paths.filter((path) => path.endsWith('.mdx'))

  const authors = await Promise.all(
    mdxFiles.map(async (path) => {
      const authorPath = join(AUTHORS_PATH, path)
      const file = await readFile(authorPath, 'utf-8')
      const { data: frontmatter } = matter(file)
      return {
        slug: path.replace(/\.mdx$/, ''),
        ...frontmatter,
      }
    })
  )
  return authors
}
