import Image from 'next/image'

export default function SiteDetails() {
  return (
    <>
      <div className="px-6 py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-text leading-7">
          <h1 className="mt-2 text-3xl text-indigo-950 dark:text-slate-50 font-bold tracking-tight sm:text-4xl">
            Site Details
          </h1>
          <blockquote className="mt-6 text-indigo-950 dark:text-slate-50">
            {' '}
            Last reviewed: 2024-03-27
          </blockquote>
          <h2 className="mt-6 text-2xl text-indigo-950 dark:text-slate-50 font-bold tracking-tight sm:text-3xl">
            Licensing
          </h2>
          <h4 className="mt-3 text-lg font-bold text-indigo-950 dark:text-slate-50">Header</h4>
          <p className="mt-3 leading-8 text-indigo-950 dark:text-slate-50">
            The animated sun and moon icons to switch site theme in the header were created by{' '}
            <a
              href="https://github.com/cyberalien/line-md"
              className="text-indigo-950 hover:text-cyan dark:text-slate-50 "
            >
              Vjacheslav Trushkin
            </a>{' '}
            and are under an MIT license.
          </p>
          <h4 className="mt-3 text-lg font-bold text-indigo-950 dark:text-slate-50">
            Icons/Footer
          </h4>
          <p className="mt-3 leading-8 text-indigo-950 dark:text-slate-50">
            All icons are by{' '}
            <a
              href="https://github.com/simple-icons/simple-icons"
              className="text-indigo-950 dark:text-slate-50 hover:text-cyan"
            >
              Simple Icon Collaborators
            </a>{' '}
            and are under a CC0 1.0 license.
          </p>
          <h4 className="mt-3 text-lg font-bold text-indigo-950 dark:text-slate-50 hover:text-cyan">
            Site Icon and Banner
          </h4>
          <p className="mt-3 leading-8 text-indigo-950 dark:text-slate-50">
            Both the site icon and the banner were created using{' '}
            <a
              href="https://www.canva.com/"
              className="text-indigo-950 dark:text-slate-50 hover:text-cyan"
            >
              Canva
            </a>{' '}
            .
          </p>
        </div>
      </div>
    </>
  )
}