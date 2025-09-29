import { slug } from 'github-slugger'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayoutWithTags'
import tagData from 'app/tag-data.json'
import { genPageMetadata } from 'app/seo'
import { Metadata } from 'next'
import { getAllPosts } from '@/scripts/mdx'
import type { Post } from '@/scripts/mdx'
import { notFound } from 'next/navigation'

type Params = { tag: string }
export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const tag = decodeURI((await params).tag)
  return genPageMetadata({
    title: tag,
    description: `${siteMetadata.title} ${tag} tagged content`,
  })
}

export const generateStaticParams = async () => {
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const paths = tagKeys.map((tag) => ({
    tag: tag,
  }))
  return paths
}

export default async function TagPage({ params }: { params: Params }) {
  const tag = decodeURI(params.tag)
  const posts: Post[] = await getAllPosts()

  const filteredPosts = posts.filter(
    (post) => post.tags && post.tags.map((t: string) => slug(t)).includes(tag)
  )

  if (!filteredPosts.length) {
    console.error('No posts found for tag:', tag) // Debugging line
    notFound()
  }

  // Capitalize and format the title for display
  const title = tag.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())

  return <ListLayout posts={filteredPosts} title={title} />
}
