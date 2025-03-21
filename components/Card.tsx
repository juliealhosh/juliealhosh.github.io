import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href }) => (
  <div className="md max-w-[544px] p-4 md:w-1/2">
    <div
      className={`${
        imgSrc && 'h-full'
      }  overflow-hidden rounded-md border-2 border-overlay1 border-opacity-60`}
    >
      {imgSrc &&
        (href ? (
          <a href={href} aria-label={`Link to ${title}`}>
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={306}
            />
          </a>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center md:h-36 lg:h-48"
            width={544}
            height={306}
          />
        ))}
      <div className="p-6">
        <h2 className="mb-3 text-gray-900 text-2xl font-bold leading-8 tracking-tight dark:text-gray-50">
          {href ? (
            // changed the following link so that it opens in the same tab
            <a href={href} aria-label={`Link to ${title}`}>
              {title}
            </a>
          ) : (
            title
          )}
        </h2>
        <p className="prose mb-3 max-w-none text-gray-900 dark:text-gray-50">{description}</p>
      </div>
    </div>
  </div>
)

export default Card
