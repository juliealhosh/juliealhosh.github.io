import { genPageMetadata } from 'app/seo'
// import GitHubCalendar, { ThemeInput } from 'react-github-calendar'
// import Link from 'next/link'
// import { RoughNotation } from 'react-rough-notation'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import Image from 'next/image'

export const metadata = genPageMetadata({ title: 'About' })

// const minimalTheme: ThemeInput = {
//   light: ['#313244', '#cba6f7'],
//   dark: ['#313244', '#cba6f7'],
// }

export default function Page() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8">
            <Image src={siteMetadata.image} alt="image" width={200} height={200} />
            <div className="mt-8 mb-8 flex space-x-4">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
              <SocialIcon kind="googlescholar" href={siteMetadata.googlescholar} size={6} />
              <SocialIcon kind="github" href={siteMetadata.github} size={6} />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
            </div>
            <h3 className="pt-4 pb-2 text-2xl text-gray-900 dark:text-gray-50 font-bold leading-8 tracking-tight">
              {siteMetadata.author}
            </h3>
            <h5 className="text-gray-500 text-xl dark:text-gray-400">
              {siteMetadata.occupation} at {siteMetadata.company}
            </h5>
            <h2 className="mt-8 mb-4 text-2xl text-gray-900 font-semibold dark:text-gray-50">
              <div className="group relative">
                <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  className="!font-semibold !text-gray-900 !no-underline dark:!text-gray-50"
                  href="/static/CV.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-gray-50 dark:bg-gray-950 px-4 py-4 leading-none">
                    <span className="flex items-center space-x-5"></span>
                    📄 Resume
                  </span>
                </a>
              </div>
            </h2>
          </div>
          <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
            <div className="mt-8">
              <p className="mt-8 mb-4 text-gray-900 dark:text-gray-50">
                👋 Hi! I'm Julie, a dedicated Machine Learning (ML), Reinforcement Learning (RL),
                and robotics researcher with an MSc in Computer Science. I completed my master's at
                McGill University under the guidance of Prof. David Meger. My expertise lies in RL,
                distributional RL, continuous-time RL, and robotics. Proficient in Python, C/C++,
                and key ML libraries. I'm passionate about bridging theory and practice in ML and
                roboitcs.
              </p>
              <p className="mt-4 mb-4 text-gray-900 dark:text-gray-50">
                I'm currently working as an AI developer at Vention, using Physical AI to solve bin
                picking challenges.
              </p>
              <div className="group relative">
                <div className="animate-tilt absolute -inset-0.5 rounded-t-lg bg-gradient-to-r from-gray-600 to-gray-300 opacity-50 blur transition "></div>
                <span className="relative flex  divide-x divide-gray-600 rounded-t-lg bg-gray-50 dark:bg-gray-950 px-4 py-4 leading-none">
                  <span className="mt-0 mb-0 text-2xl font-semibold !text-gray-900 dark:!text-gray-50">
                    💻 Technical Skills
                  </span>
                </span>
                <span className="relative flex  divide-x divide-gray-600 rounded-b-lg bg-gray-50 dark:bg-gray-950 px-4 py-4 leading-none">
                  <div className="mb-2 flex flex-wrap">
                    <span
                      className="mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-gray-50"
                      style={{ background: '#3572A5' }}
                      key="Python"
                    >
                      Python
                    </span>
                    <span
                      className="mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-gray-50"
                      style={{ background: '#555555' }}
                      key="C"
                    >
                      C
                    </span>
                    <span
                      className="mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-gray-50"
                      style={{ background: '#178600' }}
                      key="C++"
                    >
                      C++
                    </span>
                    <span
                      className="mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-gray-50"
                      style={{ background: '#7676a4' }}
                      key="HPC"
                    >
                      HPC
                    </span>
                    <span
                      className="mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-gray-50"
                      style={{ background: '#f778ae' }}
                      key="OpenCV"
                    >
                      OpenCV
                    </span>
                    <span
                      className="mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-gray-50"
                      style={{ background: '#D82C20' }}
                      key="ROS/ROS2"
                    >
                      ROS/ROS2
                    </span>
                    <span
                      className="mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-gray-50"
                      style={{ background: '#654985' }}
                      key="PyTorch"
                    >
                      PyTorch
                    </span>
                    <span
                      className="mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-gray-50"
                      style={{ background: '#1699c4' }}
                      key="Hydra"
                    >
                      Hydra
                    </span>
                    <span
                      className="mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-gray-50"
                      style={{ background: '#D82C20' }}
                      key="NumPy"
                    >
                      NumPy
                    </span>
                    <span
                      className="mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-gray-50"
                      style={{ background: '#4285F4' }}
                      key="TensorFlow"
                    >
                      TensorFlow
                    </span>
                    <span
                      className="mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-gray-50"
                      style={{ background: '#000000' }}
                      key="Matplotlib"
                    >
                      Matplotlib
                    </span>
                    <span
                      className="mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-gray-50"
                      style={{ background: '#0DB7Ed' }}
                      key="Docker"
                    >
                      Docker
                    </span>
                    <span
                      className="mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-gray-50"
                      style={{ background: '#89AAA2' }}
                      key="Mujoco"
                    >
                      Mujoco
                    </span>
                    <span
                      className="mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-gray-50"
                      style={{ background: '#e66d3e' }}
                      key="Gazebo"
                    >
                      Gazebo
                    </span>
                    <span
                      className="mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-gray-50"
                      style={{ background: '#b07219' }}
                      key="Java"
                    >
                      Java
                    </span>
                    <span
                      className="mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-gray-50"
                      style={{ background: '#26BE00' }}
                      key="Bash"
                    >
                      Bash
                    </span>
                    <span
                      className="mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-gray-50"
                      style={{ background: '#912c0d' }}
                      key="MATLAB"
                    >
                      MATLAB
                    </span>
                    <span
                      className="mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-gray-50"
                      style={{ background: '#b8655f' }}
                      key="OCaml"
                    >
                      OCaml
                    </span>
                    <span
                      className="mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-gray-50"
                      style={{ background: '#1C35FF' }}
                      key="SageMath"
                    >
                      SageMath
                    </span>
                    <span
                      className="mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-gray-50"
                      style={{ background: '#4356b5' }}
                      key="LaTeX"
                    >
                      LaTeX
                    </span>
                    <span
                      className="mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-gray-50"
                      style={{ background: '#FF9900' }}
                      key="Git"
                    >
                      Git
                    </span>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
