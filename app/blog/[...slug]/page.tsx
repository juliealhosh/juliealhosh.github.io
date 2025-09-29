import 'css/prism.css'
import 'katex/dist/katex.css'
import type { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'
import PageTitle from '@/components/PageTitle'
import { components } from '@/components/MDXComponents'
import PostSimple from '@/layouts/PostSimple'
import PostProject from '@/layouts/PostProject'
import PostLayout from '@/layouts/PostLayout'
import PostBanner from '@/layouts/PostBanner'
import { getPostBySlug, getAllPosts, getAllAuthors } from '@/scripts/mdx'
import type { Post } from '@/scripts/mdx'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { isDraft } from '@/scripts/utils'

// Note: As discussed, you need a custom getCoreContent function
const getCoreContent = (frontmatter: any) => ({
  ...frontmatter,
})

const defaultLayout = 'PostLayout'
const layouts = {
  PostSimple,
  PostProject,
  PostLayout,
  PostBanner,
}

type Params = { slug: string[] }
// type Params = Promise<{ slug: string[] }>

export default async function Page({ params }: { params: Params }) {
  const slugString = params.slug.join('/')
  const sortedPosts: Post[] = await getAllPosts()

  // Filter out drafts if in production
  const publishedPosts =
    process.env.NODE_ENV === 'production' ? sortedPosts.filter((p) => !isDraft(p)) : sortedPosts

  const postIndex = publishedPosts.findIndex((p) => p.slug === slugString)

  if (postIndex === -1) {
    return (
      <div className="mt-24 text-center">
        <PageTitle>
          Under Construction{' '}
          <span role="img" aria-label="roadwork sign">
            🚧
          </span>
        </PageTitle>
      </div>
    )
  }

  const prev = sortedPosts[postIndex - 1]
  const next = sortedPosts[postIndex + 1]
  const post = await getPostBySlug(slugString)

  if (!post) {
    return notFound()
  }

  const allAuthors = await getAllAuthors()
  const { mdxContent, frontmatter } = post // <-- Use mdxContent here
  const authorList = (frontmatter.authors as string[]) || ['default']
  const authorDetails = authorList
    .map((author) => {
      const authorResults = allAuthors.find((p) => p.slug === author)
      return authorResults ? getCoreContent(authorResults) : null
    })
    .filter(Boolean)

  const mainContent = getCoreContent(frontmatter)

  const Layout = layouts[frontmatter.layout || defaultLayout]

  return (
    <>
      <Layout content={mainContent} authorDetails={authorDetails} next={next} prev={prev}>
        <MDXRemote source={mdxContent} components={components} />
      </Layout>
    </>
  )
}

export async function generateMetadata({
  params,
}: {
  params: Params
}): Promise<Metadata | undefined> {
  const slugString = params.slug.join('/')
  const post = await getPostBySlug(slugString)

  if (!post) {
    return
  }

  const { frontmatter } = post
  const allAuthors = await getAllAuthors() // Fetch authors
  const authorList = (frontmatter.authors as string[]) || ['default']
  const authorDetails = authorList
    .map((author) => {
      const authorResults = allAuthors.find((p) => p.slug === author)
      return authorResults ? getCoreContent(authorResults) : null
    })
    .filter(Boolean)

  const publishedAt = new Date(frontmatter.date).toISOString()
  const modifiedAt = new Date(frontmatter.lastmod || frontmatter.date).toISOString()
  const authors = authorDetails.map((author) => author.name)
  const imageList = [siteMetadata.socialBanner]
  const ogImages = imageList.map((img) => ({
    url: img.includes('http') ? img : siteMetadata.siteUrl + img,
  }))

  return {
    title: frontmatter.title,
    description: frontmatter.summary,
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.summary,
      siteName: siteMetadata.title,
      locale: 'en_US',
      type: 'article',
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      url: './',
      images: ogImages,
      authors: authors.length > 0 ? authors : [siteMetadata.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: frontmatter.title,
      description: frontmatter.summary,
      images: imageList,
    },
  }
}

export const generateStaticParams = async () => {
  const posts: Post[] = await getAllPosts()
  return posts.map((p) => ({ slug: p.slug.split('/') }))
}
