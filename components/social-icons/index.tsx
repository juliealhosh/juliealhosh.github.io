// import Book from './book.svg'
// import Chemistry from './chemistry.svg'
import {
  Mail,
  Github,
  // Youtube,
  Linkedin,
  // Mastodon,
  // Orcid,
  // Exercism,
  RSSIcon,
  // Keyoxide,
} from './icons'

const components = {
  mail: Mail,
  github: Github,
  // youtube: Youtube,
  linkedin: Linkedin,
  // book: Book,
  // chemistry: Chemistry,
  // mastodon: Mastodon,
  // orcid: Orcid,
  // exercism: Exercism,
  // rss_icon: RSSIcon,
  // keyoxide: Keyoxide,
}

type SocialIconProps = {
  kind: keyof typeof components
  href: string | undefined
  size?: number
}

const SocialIcon = ({ kind, href, size = 8 }: SocialIconProps) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null

  const SocialSvg = components[kind]

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`fill-gray-500 text-text dark:fill-gray-400 hover:text-pink h-${size} w-${size}`}
        // className={`fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-${size} w-${size}`}
      />
    </a>
  )
}

export default SocialIcon
