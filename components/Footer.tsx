import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import React from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer>
      <div className="mt-16 mb-16 flex flex-col items-center">
        <div className="mb-4 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          <SocialIcon kind="googlescholar" href={siteMetadata.googlescholar} size={6} />
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
          {/* <SocialIcon kind="mastodon" href={siteMetadata.mastodon} size={6} />
          <SocialIcon kind="orcid" href={siteMetadata.orcid} size={6} />
          <SocialIcon kind="exercism" href={siteMetadata.exercism} size={6} />
          <SocialIcon kind="rss_icon" href={siteMetadata.rss} size={6} />
          <SocialIcon kind="keyoxide" href={siteMetadata.keyoxide} size={6} /> */}
        </div>
        <p className="text-sm opacity-50">@{currentYear} Julie Alhosh</p>
      </div>
    </footer>
  )
}
