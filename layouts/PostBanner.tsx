import { ReactNode } from 'react'
import type { Post } from '@/scripts/mdx'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'

interface LayoutProps {
  content: Post
  children: ReactNode
  next?: Post
  prev?: Post
}

export default function PostMinimal({ content, next, prev, children }: LayoutProps) {
  const { slug, title } = content
  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <article>
        <div>
          <div className="space-y-1 pb-10 text-center dark:border-gray-700">
            <div className="pt-10 relative">
              <PageTitle>{title}</PageTitle>
            </div>
          </div>
          <div className="prose text-text max-w-none py-4 dark:prose-invert">{children}</div>
          <footer>
            <div className="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
              {prev && prev.slug && (
                <div className="pt-4 xl:pt-8">
                  <Link
                    href={`/blog/${prev.slug}`}
                    className="text-pink hover:text-teal"
                    aria-label={`Previous post: ${prev.title}`}
                  >
                    &larr; {prev.title}
                  </Link>
                </div>
              )}
              {next && next.slug && (
                <div className="pt-4 xl:pt-8">
                  <Link
                    href={`/blog/${next.slug}`}
                    className="text-pink hover:text-teal"
                    aria-label={`Next post: ${next.title}`}
                  >
                    {next.title} &rarr;
                  </Link>
                </div>
              )}
            </div>
          </footer>
        </div>
      </article>
    </SectionContainer>
  )
}
