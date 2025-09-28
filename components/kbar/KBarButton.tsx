import React from 'react'

export const KBarButton = ({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    type="button"
    className="rounded px-2 py-1 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
    {...props}
  >
    {children}
  </button>
)
