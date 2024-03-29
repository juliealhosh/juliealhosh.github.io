import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import { genPageMetadata } from 'app/seo'
import { RoughNotation } from 'react-rough-notation'
import SocialIcon from '@/components/social-icons'
const MAX_DISPLAY = 5

export default function Home() {
  return (
    <>
      <div className="fade-in banner flex flex-1 flex-row flex-wrap justify-between px-6 py-10 dark:text-slate-50 lg:px-10">
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl text-indigo-950 font-bold dark:text-slate-50 lg:text-5xl">
            {siteMetadata.author}
          </h1>
          <p className="my-2 text-indigo-950 lg:my-4 lg:text-2xl dark:text-slate-50">
            Member of the Mobile Robotics Lab <br /> of the Centre for Intelligent Machines <br />
            at McGill University
          </p>
          {/* <p className="font-light text-indigo-950 lg:text-xl dark:text-slate-50">
            Read more
            <Link className="ml-2 mr-2 font-normal text-indigo-950" href="/about">
              <RoughNotation
                show
                type="highlight"
                animationDelay={250}
                animationDuration={2000}
                color={'#F5E1FF'}
              >
                about me
              </RoughNotation>
            </Link>
            or
            <Link
              className="ml-2 font-normal text-indigo-950"
              href={`mailto:${siteMetadata.email}`}
            >
              <RoughNotation
                show
                type="highlight"
                animationDelay={250}
                animationDuration={2000}
                color={'#CAF0F8'}
              >
                contact me
              </RoughNotation>
            </Link>
          </p> */}
        </div>

        <div className="flex justify-start">
          <div className="grid grid-cols-1 grid-rows-2 gap-8 py-12">
            <div className="my-2 grid items-start gap-8">
              <div className="group relative">
                <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                <Link href="/projects">
                  <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-slate-50 px-7 py-4 leading-none dark:bg-black">
                    <span className="flex items-center space-x-5">
                      {/* <SocialIcon kind="educative" href={/projects} size={6}/> */}
                      <span className="pr-6 text-gray-900 dark:text-gray-100">
                        📚 What I worked on
                      </span>
                    </span>
                    <span className="pl-6 text-indigo-400 transition duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100">
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
                  <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-slate-50 px-7 py-4 leading-none dark:bg-black">
                    <span className="flex items-center space-x-5">
                      {/* <SocialIcon kind="book" href="/about" size={6} /> */}
                      <span className="pr-6 text-gray-900 dark:text-gray-100">
                        🪪 Resume and more info
                      </span>
                    </span>
                    <span className="pl-6 text-indigo-400 transition duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100">
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
