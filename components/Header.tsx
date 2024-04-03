import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import { HomeIcon } from '@heroicons/react/20/solid'
// import SearchButton from './SearchButton'
import Image from './Image'

const Header = () => {
  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <div className="mr-3 ">
                <Image
                  className="rounded-xl"
                  width={50}
                  height={50}
                  alt="logo"
                  src={siteMetadata.siteLogo}
                />
              </div>
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="hidden h-6 text-2xl text-gray-900 hover:text-violet-400 dark:text-gray-200 dark:hover:text-violet-200 font-semibold sm:block">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </div>
      <div className="flex items-center leading-5 space-x-4 sm:space-x-6">
        <a
          href="/"
          className="text-gray-900 hover:text-violet-400 dark:text-gray-200 dark:hover:text-violet-200"
        >
          <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
          <span className="sr-only">Home</span>
        </a>
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hidden sm:block font-medium font-semibold text-gray-900 hover:text-violet-400 dark:text-gray-200 dark:hover:text-violet-200"
            >
              {link.title}
            </Link>
          ))}
        <ThemeSwitch />
        {/* <SearchButton /> */}
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
