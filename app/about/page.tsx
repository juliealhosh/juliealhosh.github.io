import { genPageMetadata } from 'app/seo'
import GitHubCalendar, { ThemeInput } from 'react-github-calendar'
import Link from 'next/link'
import { RoughNotation } from 'react-rough-notation'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import Image from 'next/image'

export const metadata = genPageMetadata({ title: 'About' })

const minimalTheme: ThemeInput = {
  light: ['#313244', '#cba6f7'],
  dark: ['#313244', '#cba6f7'],
}

export default function Page() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-indigo-950 dark:text-slate-50 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8">
            <Image src={siteMetadata.image} alt="image" width={150} height={150} />
            <div className="mt-8 mb-8 flex space-x-4">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
              <SocialIcon kind="github" href={siteMetadata.github} size={6} />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
            </div>
            <h3 className="pt-4 pb-2 text-2xl text-indigo-950 dark:text-slate-50 font-bold leading-8 tracking-tight">
              {siteMetadata.author}
            </h3>
            <h5 className="text-gray-500 dark:text-gray-400">{siteMetadata.occupation}</h5>
            <h5 className="text-gray-500 dark:text-gray-400">{siteMetadata.company}</h5>
            <Link href="/about/this-site">
              <button className="rounded-md bg-indigo-300 mt-8 px-3 py-2 text-sm font-semibold text-base shadow-sm hover:bg-slate-500">
                {' '}
                Site Details
              </button>
            </Link>
          </div>
          <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
            <p className="mt-8">
              <p className="mt-8 mb-4 text-indigo-950 dark:text-slate-50">
                👋 Hi! I'm Julie, a dedicated Machine Learning (ML) and Reinforcement Learning (RL)
                researcher pursuing an MSc in Computer Science at McGill University under the
                guidance of Prof. David Meger. My expertise lies in RL, distributional RL,
                continuous-time RL, optimal control, and robotics. Proficient in Python, C/C++, and
                key ML libraries. I'm also working on a robotics research project using BlueBoat, an
                autonomous surface vehicle (more on that soon!). I'm passionate about bridging
                theory and practice in ML and RL and am open to exciting career opportunities in
                this field.
              </p>
              <div>
                <ul>
                  <li>
                    <p className="mt-8 mb-4 text-indigo-950 dark:text-slate-50">
                      🚀 Currently working on a gym environment that simulates an autonomous surface
                      vehicle equiped with a winch trying to survey an area in order to reconstruct
                      the map of a certain quality of interset, such as the depth of thermoclines
                    </p>
                  </li>
                  <li>
                    <p className="mt-8 mb-4 text-indigo-950 dark:text-slate-50">
                      💬 In my free time, I swim and watch stand-up comedy
                    </p>
                  </li>
                </ul>
              </div>

              <h2 className="mt-8 mb-4 text-2xl text-indigo-950 font-semibold dark:text-slate-50">
                <a
                  className="!font-semibold !text-black !no-underline dark:!text-slate-50"
                  href="/static/cv.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <RoughNotation
                    show
                    type="box"
                    animationDelay={250}
                    animationDuration={1500}
                    strokeWidth={2}
                    color="#604D7B"
                  >
                    Resume
                  </RoughNotation>
                </a>
              </h2>
              <h2 className="mt-8 mb-4 text-2xl font-semibold !text-black dark:!text-slate-50">
                Skills
              </h2>
              <div className="mb-2 flex flex-wrap">
                <span
                  className="mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-slate-50"
                  style={{ background: '#3572A5' }}
                  key="Python"
                >
                  Python
                </span>
                <span
                  className="mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-slate-50"
                  style={{ background: '#555555' }}
                  key="C"
                >
                  C
                </span>
                <span
                  className="mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-slate-50"
                  style={{ background: '#178600' }}
                  key="C++"
                >
                  C++
                </span>
                <span
                  className="mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-slate-50"
                  style={{ background: '#D82C20' }}
                  key="ROS"
                >
                  ROS
                </span>
                <span
                  className="mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-slate-50"
                  style={{ background: '#654985' }}
                  key="PyTorch"
                >
                  PyTorch
                </span>
                <span
                  className="mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-slate-50"
                  style={{ background: '#1699c4' }}
                  key="Hydra"
                >
                  Hydra
                </span>
                <span
                  className="mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-slate-50"
                  style={{ background: '#D82C20' }}
                  key="NumPy"
                >
                  NumPy
                </span>
                <span
                  className="mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-slate-50"
                  style={{ background: '#4285F4' }}
                  key="TensorFlow"
                >
                  TensorFlow
                </span>
                <span
                  className="mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-slate-50"
                  style={{ background: '#000000' }}
                  key="Matplotlib"
                >
                  Matplotlib
                </span>
                <span
                  className="mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-slate-50"
                  style={{ background: '#0DB7Ed' }}
                  key="Docker"
                >
                  Docker
                </span>
                <span
                  className="mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-slate-50"
                  style={{ background: '#89AAA2' }}
                  key="Mujoco"
                >
                  Mujoco
                </span>
                <span
                  className="mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-slate-50"
                  style={{ background: '#e66d3e' }}
                  key="Gazebo"
                >
                  Gazebo
                </span>
                <span
                  className="mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-slate-50"
                  style={{ background: '#b07219' }}
                  key="Java"
                >
                  Java
                </span>
                <span
                  className="mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-slate-50"
                  style={{ background: '#26BE00' }}
                  key="Bash"
                >
                  Bash
                </span>
                <span
                  className="mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-slate-50"
                  style={{ background: '#912c0d' }}
                  key="MATLAB"
                >
                  MATLAB
                </span>
                <span
                  className="mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-slate-50"
                  style={{ background: '#b8655f' }}
                  key="OCaml"
                >
                  OCaml
                </span>
                <span
                  className="mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-slate-50"
                  style={{ background: '#1C35FF' }}
                  key="SageMath"
                >
                  SageMath
                </span>
                <span
                  className="mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-slate-50"
                  style={{ background: '#4356b5' }}
                  key="LaTeX"
                >
                  LaTeX
                </span>
                <span
                  className="mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-slate-50"
                  style={{ background: '#FF9900' }}
                  key="Git"
                >
                  Git
                </span>
              </div>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}