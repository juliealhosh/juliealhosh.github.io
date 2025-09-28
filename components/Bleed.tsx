import { ReactNode } from 'react'

export default function Bleed({ children }: { children: ReactNode }) {
  return <div className="w-full">{children}</div>
}
