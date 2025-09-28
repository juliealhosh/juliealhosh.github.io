'use client'

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import type { ComponentType, ReactNode } from 'react'
import { components } from '@/components/MDXComponents' // your actual exported object

interface Props {
  mdxSource: MDXRemoteSerializeResult
  components?: Record<string, ComponentType<any> | ReactNode>
}

export default function MDXClientWrapper({ mdxSource, components: customComponents }: Props) {
  return <MDXRemote {...mdxSource} components={customComponents || components} />
}
