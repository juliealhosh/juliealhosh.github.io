import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import { genPageMetadata } from 'app/seo'
import SocialIcon from '@/components/social-icons'
const MAX_DISPLAY = 5

export default function Home() {
  return (
    <>
      <div className="fade-in banner flex flex-1 flex-row flex-wrap justify-between px-6 py-10 dark:text-gray-50 lg:px-10">
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl text-gray-900 font-bold dark:text-gray-50 lg:text-5xl">
            {siteMetadata.author}
          </h1>
          <p className="my-2 text-gray-900 lg:my-4 lg:text-4xl dark:text-gray-50">
            {siteMetadata.occupation} at {siteMetadata.company}
          </p>
        </div>

        <div className="flex justify-start">
          <div className="grid grid-cols-1 grid-rows-2 gap-8 py-12">
            <div className="my-2 grid items-start gap-8">
              <div className="group relative">
                <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                <Link href="/projects">
                  <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-gray-50 px-7 py-4 leading-none dark:bg-black">
                    <span className="flex items-center space-x-5">
                      {/* <SocialIcon kind="educative" href={/projects} size={6}/> */}
                      <span className="pr-6 text-gray-900 dark:text-gray-100">
                        📚 What I worked on
                      </span>
                    </span>
                    <span className="pl-6 text-indigo-400 transition duration-200 group-hover:text-purple-400 dark:group-hover:text-purple-300">
                      Projects&nbsp;→
                    </span>
                  </span>
                </Link>
              </div>
            </div>
            <div className="my-2 grid items-start gap-8">
              <div className="group relative">
                <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                <Link href="/about">
                  <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-gray-50 px-7 py-4 leading-none dark:bg-black">
                    <span className="flex items-center space-x-5">
                      {/* <SocialIcon kind="book" href="/about" size={6} /> */}
                      <span className="pr-6 text-gray-900 dark:text-gray-100">
                        🪪 Resume and more info
                      </span>
                    </span>
                    <span className="pl-6 text-indigo-400 transition duration-200 group-hover:text-purple-400 dark:group-hover:text-purple-300">
                      About&nbsp;→
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
