'use client'

import { useState, useEffect, useRef } from 'react'
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/20/solid'
import Link from './Link'

interface SearchItem {
  title: string
  summary: string
  tags: string[]
  url: string
  type: 'post' | 'project'
}

const matches = (item: SearchItem, query: string) => {
  const q = query.toLowerCase()
  return (
    item.title.toLowerCase().includes(q) ||
    item.summary.toLowerCase().includes(q) ||
    item.tags.some((tag) => tag.toLowerCase().includes(q))
  )
}

const SearchButton = () => {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [items, setItems] = useState<SearchItem[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!open || items.length > 0) return
    fetch('/static/search.json')
      .then((res) => res.json())
      .then((data: SearchItem[]) => setItems(data))
      .catch(() => setItems([]))
  }, [open, items.length])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      inputRef.current?.focus()
    } else {
      document.body.style.overflow = 'auto'
      setQuery('')
    }
  }, [open])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  const results = query.trim() ? items.filter((item) => matches(item, query)) : items
  const postResults = results.filter((item) => item.type === 'post')
  const projectResults = results.filter((item) => item.type === 'project')

  return (
    <>
      <button aria-label="Search" onClick={() => setOpen(true)}>
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-900 hover:text-violet-400 dark:text-gray-200 dark:hover:text-violet-200" />
      </button>
      {open && (
        <div className="fixed inset-0 z-20 px-4 pt-24">
          <button
            aria-label="Close search"
            tabIndex={-1}
            className="absolute inset-0 h-full w-full cursor-default bg-black/50"
            onClick={() => setOpen(false)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Search"
            className="relative mx-auto w-full max-w-lg overflow-hidden rounded-lg bg-base shadow-lg"
          >
            <div className="flex items-center gap-2 border-b border-overlay1 px-4 py-3">
              <MagnifyingGlassIcon className="h-5 w-5 flex-shrink-0 text-subtext0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search posts and projects..."
                className="w-full border-none bg-transparent text-text placeholder-subtext0 focus:outline-none focus:ring-0"
              />
              <button aria-label="Close search" onClick={() => setOpen(false)}>
                <XMarkIcon className="h-5 w-5 flex-shrink-0 text-subtext0" />
              </button>
            </div>
            <div className="max-h-80 overflow-y-auto p-2">
              {results.length === 0 && (
                <p className="px-3 py-4 text-sm text-subtext0">No results found.</p>
              )}
              {postResults.length > 0 && (
                <>
                  <p className="px-3 pb-1 pt-2 text-xs uppercase tracking-wide text-subtext0">
                    Posts
                  </p>
                  {postResults.map((item) => (
                    <Link
                      key={item.url}
                      href={item.url}
                      onClick={() => setOpen(false)}
                      className="block rounded-md px-3 py-2 hover:bg-overlay1"
                    >
                      <p className="text-sm font-medium text-text">{item.title}</p>
                      {item.summary && (
                        <p className="truncate text-xs text-subtext0">{item.summary}</p>
                      )}
                    </Link>
                  ))}
                </>
              )}
              {projectResults.length > 0 && (
                <>
                  <p className="px-3 pb-1 pt-2 text-xs uppercase tracking-wide text-subtext0">
                    Projects
                  </p>
                  {projectResults.map((item) => (
                    <a
                      key={item.url}
                      href={item.url}
                      onClick={() => setOpen(false)}
                      className="block rounded-md px-3 py-2 hover:bg-overlay1"
                    >
                      <p className="text-sm font-medium text-text">{item.title}</p>
                      {item.summary && (
                        <p className="truncate text-xs text-subtext0">{item.summary}</p>
                      )}
                    </a>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default SearchButton
