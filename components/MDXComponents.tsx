import type { ComponentType, ReactNode } from 'react'
import Image from 'next/image'
export const components: Record<string, ComponentType<any> | ReactNode> = {
  h1: ({ children, ...props }) => <h1 {...props}>{children}</h1>,
  h2: ({ children, ...props }) => <h2 {...props}>{children}</h2>,
  p: ({ children, ...props }) => <p {...props}>{children}</p>,
  div: ({ children, ...props }) => <div {...props}>{children}</div>,
  figure: ({ children, ...props }) => <figure {...props}>{children}</figure>,
  figcaption: ({ children, ...props }) => <figcaption {...props}>{children}</figcaption>,
  img: ({ children, ...props }) => <Image {...props} alt={children} />,
  // ...other MDX components
}
