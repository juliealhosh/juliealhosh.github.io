import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type BlogPost = {
  path: string
  slug: string
  title: string
  date: string
  layout: string
  tags: string[]
  summary?: string
  content: string
  [key: string]: any
}

export function getAllPosts(): BlogPost[] {
  const postsDir = path.join(process.cwd(), 'data/blog')
  const files = fs.readdirSync(postsDir)
  return files
    .filter((file) => file.endsWith('.md') || file.endsWith('.mdx'))
    .map((file) => {
      const source = fs.readFileSync(path.join(postsDir, file), 'utf8')
      const { data, content } = matter(source)
      return {
        path: `blog/${file.replace(/\.mdx?$/, '')}`,
        slug: file.replace(/\.mdx?$/, ''),
        title: data.title || '',
        date: data.date || '',
        layout: data.layout || '',
        tags: data.tags || [],
        summary: data.summary || '',
        content,
        ...data,
      }
    })
}


export function sortPosts(posts: BlogPost[]) {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function coreContent(post: BlogPost) {
  // Return only the fields you need
  return post
}

export function allCoreContent(posts: BlogPost[]) {
  return posts
}