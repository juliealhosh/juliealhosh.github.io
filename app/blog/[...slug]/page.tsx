import 'css/prism.css'
import 'katex/dist/katex.css'

import fs from 'fs'
import path from 'path'
import { serialize } from 'next-mdx-remote/serialize'
import MDXClientWrapper from '@/components/MDXClientWrapper'
import PageTitle from '@/components/PageTitle'
import { components } from '@/components/MDXComponents'
import { getAllPosts, sortPosts, coreContent, allCoreContent } from '@/scripts/getPosts'
import type { BlogPost } from '@/scripts/getPosts'
import PostSimple from '@/layouts/PostSimple'
import PostProject from '@/layouts/PostProject'
import PostLayout from '@/layouts/PostLayout'
import PostBanner from '@/layouts/PostBanner'
import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'

const blogDir = path.join(process.cwd(), 'data/blog')

const defaultLayout = 'PostLayout'
const layouts = {
  PostSimple,
  PostProject,
  PostLayout,
  PostBanner,
}

type Params = { slug: string[] }

export async function generateMetadata({
  params,
}: {
  params: Params
}): Promise<Metadata | undefined> {
  const slugString = params.slug.join('/')
  const allPosts = getAllPosts()
  const post = allPosts.find((p) => p.slug === slugString)
  if (!post) return

  const publishedAt = new Date(post.date).toISOString()
  const modifiedAt = new Date(post.lastmod || post.date).toISOString()
  const imageList = post.images
    ? typeof post.images === 'string'
      ? [post.images]
      : post.images
    : [siteMetadata.socialBanner]

  const ogImages = imageList.map((img) => ({
    url: img.includes('http') ? img : siteMetadata.siteUrl + img,
  }))

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      siteName: siteMetadata.title,
      locale: 'en_US',
      type: 'article',
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      url: './',
      images: ogImages,
    },
  }
}

export default async function Page({ params }: { params: Params }) {
  const slugString = params.slug.join('/')
  const allPosts = getAllPosts()

  const sortedCoreContents = allCoreContent(sortPosts(allPosts))
  const postIndex = sortedCoreContents.findIndex((p) => p.slug === slugString)
  if (postIndex === -1) {
    return (
      <div className="mt-24 text-center">
        <PageTitle>
          Under Construction {}
          <span role="img" aria-label="roadwork sign">
            🚧
          </span>
        </PageTitle>
      </div>
    )
  }

  const prev = sortedCoreContents[postIndex + 1]
  const next = sortedCoreContents[postIndex - 1]
  const post = allPosts.find((p) => p.slug === slugString) as BlogPost
  const mainContent = coreContent(post)

  const Layout = layouts[post.layout || defaultLayout]

  // --- MDXRemote setup ---
  const mdxPath = path.join(blogDir, `${slugString}.mdx`)
  const source = fs.readFileSync(mdxPath, 'utf8')
  const mdxSource = await serialize(source)

  return (
    <Layout content={mainContent} next={next} prev={prev}>
      <MDXClientWrapper mdxSource={mdxSource} components={components} />
    </Layout>
  )
}
