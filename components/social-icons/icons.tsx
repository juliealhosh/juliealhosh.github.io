import { SVGProps } from 'react'

// Icons taken from: https://simpleicons.org/
// To add a new icon, add a new function here and add it to components in social-icons/index.tsx

// export function RSSIcon(svgProps: SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       {...svgProps}
//     >
//       <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z" />
//     </svg>
//   )
// }
// export function RSSIcon(svgProps: SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       {...svgProps}
//     >
//       <path
//         fill="currentColor"
//         d="M19.199 24C19.199 13.467 10.533 4.8 0 4.8V0c13.165 0 24 10.835 24 24zM3.291 17.415a3.3 3.3 0 0 1 3.293 3.295A3.303 3.303 0 0 1 3.283 24C1.47 24 0 22.526 0 20.71s1.475-3.294 3.291-3.295M15.909 24h-4.665c0-6.169-5.075-11.245-11.244-11.245V8.09c8.727 0 15.909 7.184 15.909 15.91"
//       />
//     </svg>
//   )
// }

// export function Keyoxide(svgProps: SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 256 256"
//       {...svgProps}
//     >
//       <path
//         fill="currentColor"
//         d="M228.75 100.05c-3.52-3.67-7.15-7.46-8.34-10.33c-1.06-2.56-1.14-7.83-1.21-12.47c-.15-10-.34-22.44-9.18-31.27s-21.27-9-31.27-9.18c-4.64-.07-9.91-.15-12.47-1.21c-2.87-1.19-6.66-4.82-10.33-8.34C148.87 20.46 140.05 12 128 12s-20.87 8.46-27.95 15.25c-3.67 3.52-7.46 7.15-10.33 8.34c-2.56 1.06-7.83 1.14-12.47 1.21c-10 .2-22.44.34-31.25 9.2s-9 21.25-9.2 31.25c-.07 4.64-.15 9.91-1.21 12.47c-1.19 2.87-4.82 6.66-8.34 10.33C20.46 107.13 12 116 12 128s8.46 20.87 15.25 28c3.52 3.67 7.15 7.46 8.34 10.33c1.06 2.56 1.14 7.83 1.21 12.47c.15 10 .34 22.44 9.18 31.27s21.27 9 31.27 9.18c4.64.07 9.91.15 12.47 1.21c2.87 1.19 6.66 4.82 10.33 8.34C107.13 235.54 116 244 128 244s20.87-8.46 27.95-15.25c3.67-3.52 7.46-7.15 10.33-8.34c2.56-1.06 7.83-1.14 12.47-1.21c10-.15 22.44-.34 31.27-9.18s9-21.27 9.18-31.27c.07-4.64.15-9.91 1.21-12.47c1.19-2.87 4.82-6.66 8.34-10.33c6.79-7.08 15.25-15.9 15.25-27.95s-8.46-20.87-15.25-27.95m-17.32 39.29c-4.82 5-10.28 10.72-13.19 17.76c-2.82 6.8-2.93 14.16-3 21.29c-.08 5.36-.19 12.71-2.15 14.66s-9.3 2.07-14.66 2.15c-7.13.11-14.49.22-21.29 3c-7 2.91-12.73 8.37-17.76 13.19c-3.6 3.45-8.98 8.61-11.38 8.61s-7.78-5.16-11.34-8.57c-5-4.82-10.72-10.28-17.76-13.19c-6.8-2.82-14.16-2.93-21.29-3c-5.36-.08-12.71-.19-14.66-2.15s-2.07-9.3-2.15-14.66c-.11-7.13-.22-14.49-3-21.29c-2.91-7-8.37-12.73-13.19-17.76C41.16 135.78 36 130.4 36 128s5.16-7.78 8.57-11.34c4.82-5 10.28-10.72 13.19-17.76c2.82-6.8 2.93-14.16 3-21.29C60.88 72.25 61 64.9 63 63s9.3-2.07 14.66-2.15c7.13-.11 14.49-.22 21.29-3c7-2.91 12.73-8.37 17.76-13.19C120.22 41.16 125.6 36 128 36s7.78 5.16 11.34 8.57c5 4.82 10.72 10.28 17.76 13.19c6.8 2.82 14.16 2.93 21.29 3c5.36.08 12.71.19 14.66 2.15s2.07 9.3 2.15 14.66c.11 7.13.22 14.49 3 21.29c2.91 7 8.37 12.73 13.19 17.76c3.41 3.56 8.57 8.94 8.57 11.34s-5.12 7.82-8.53 11.38m-34.94-43.83a12 12 0 0 1 0 17l-56 56a12 12 0 0 1-17 0l-24-24a12 12 0 1 1 17-17L112 143l47.51-47.52a12 12 0 0 1 16.98.03"
//       />
//     </svg>
//   )
// }

// export function Orcid(svgProps: SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       {...svgProps}
//     >
//       <path
//         fill="currentColor"
//         d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12s12-5.372 12-12S18.628 0 12 0M7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947m-.722 3.038h1.444v10.041H6.647zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025c0 2.578-2.016 5.025-5.325 5.025h-3.919zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722c0-2.016-1.284-3.722-4.097-3.722z"
//       />
//     </svg>
//   )
// }

export function Github(svgProps: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" {...svgProps}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

export function Linkedin(svgProps: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" {...svgProps}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
    </svg>
  )
}

export function Mail(svgProps: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" {...svgProps}>
      {/* <path
        fill="currentColor"
        d="m15.24 8.998l3.656-3.073v15.81H2.482C1.11 21.735 0 20.609 0 19.223V6.944l7.58 6.38a2.186 2.186 0 0 0 2.871-.042l4.792-4.284zm-5.456 3.538l1.809-1.616a2.438 2.438 0 0 1-1.178-.533L.905 2.395A.552.552 0 0 0 0 2.826v2.811l8.226 6.923a1.186 1.186 0 0 0 1.558-.024M23.871 2.463a.551.551 0 0 0-.776-.068l-3.199 2.688v16.653h1.623c1.371 0 2.481-1.127 2.481-2.513V2.824a.551.551 0 0 0-.129-.36z"
      />
       */}
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    </svg>
  )
}

// export function Youtube(svgProps: SVGProps<SVGSVGElement>) {
//   return (
//     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...svgProps}>
//       <path d="M23.499 6.203a3.008 3.008 0 00-2.089-2.089c-1.87-.501-9.4-.501-9.4-.501s-7.509-.01-9.399.501a3.008 3.008 0 00-2.088 2.09A31.258 31.26 0 000 12.01a31.258 31.26 0 00.523 5.785 3.008 3.008 0 002.088 2.089c1.869.502 9.4.502 9.4.502s7.508 0 9.399-.502a3.008 3.008 0 002.089-2.09 31.258 31.26 0 00.5-5.784 31.258 31.26 0 00-.5-5.808zm-13.891 9.4V8.407l6.266 3.604z"></path>
//     </svg>
//   )
// }

// export function Exercism(svgProps: SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       {...svgProps}
//     >
//       <path
//         fill="currentColor"
//         d="M4.35 1.66c-.959 0-1.686.298-2.181.893c-.496.595-.744 1.464-.744 2.605v3.474c0 .805-.086 1.424-.259 1.858c-.173.434-.493.84-.96 1.218c-.138.113-.206.206-.206.278c0 .072.068.165.205.277c.476.386.798.794.967 1.225c.17.43.253 1.047.253 1.851v3.462c0 1.15.25 2.023.75 2.618c.5.595 1.224.892 2.174.892h.882c.379 0 .618-.018.72-.054c.1-.036.15-.127.15-.271c0-.201-.133-.334-.399-.398l-.483-.109c-1.063-.241-1.595-1.29-1.595-3.148v-3.293c0-1.247-.302-2.127-.906-2.642l-.23-.193c-.112-.096-.168-.169-.168-.217c0-.056.056-.129.169-.217l.23-.193c.603-.515.905-1.395.905-2.642V5.641c0-1.11.135-1.88.405-2.31c.27-.43.832-.762 1.685-.995c.258-.073.387-.19.387-.35c0-.217-.29-.326-.87-.326zm14.419.029c-.58 0-.87.108-.87.325c0 .161.128.278.386.35c.854.233 1.416.565 1.686.995c.27.43.405 1.2.405 2.31v3.294c0 1.246.302 2.126.906 2.641l.229.193c.113.089.17.161.17.217c0 .049-.057.121-.17.217l-.23.193c-.603.515-.905 1.396-.905 2.642v3.293c0 1.858-.532 2.907-1.595 3.149l-.484.108c-.266.064-.398.197-.398.398c0 .145.05.235.15.272c.102.036.341.054.72.054h.882c.95 0 1.675-.298 2.174-.893c.5-.595.75-1.467.75-2.617v-3.462c0-.805.084-1.422.253-1.852c.17-.43.491-.838.967-1.224c.137-.113.205-.205.205-.278c0-.072-.068-.165-.205-.277c-.468-.378-.788-.784-.961-1.218c-.173-.435-.26-1.054-.26-1.858V5.187c0-1.142-.247-2.01-.743-2.606c-.495-.595-1.222-.892-2.18-.892zM7.683 9.735c-1.456 0-2.64 1.111-2.64 2.478h1.02c0-.838.727-1.52 1.62-1.52c.892 0 1.619.682 1.619 1.52h1.02c0-1.367-1.183-2.478-2.64-2.478zm8.406 0c-1.456 0-2.639 1.111-2.639 2.478h1.02c0-.838.727-1.52 1.62-1.52c.892 0 1.62.682 1.62 1.52h1.02c0-1.367-1.185-2.478-2.64-2.478zM9.71 14.36v.561c0 1.277 1.062 2.316 2.366 2.316c1.305 0 2.367-1.039 2.367-2.316v-.56h-.934v.56c0 .877-.76 1.426-1.433 1.426s-1.48-.273-1.48-1.426v-.56z"
//       />
//     </svg>
//   )
// }

// export function Mastodon(svgProps: SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       {...svgProps}
//     >
//       <path
//         fill="currentColor"
//         d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127C.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611c.118 1.24.325 2.47.62 3.68c.55 2.237 2.777 4.098 4.96 4.857c2.336.792 4.849.923 7.256.38c.265-.061.527-.132.786-.213c.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041a.053.053 0 0 0-.046-.01a20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433a.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546c.376 0 .75 0 1.125-.01c1.57-.044 3.224-.124 4.768-.422c.038-.008.077-.015.11-.024c2.435-.464 4.753-1.92 4.989-5.604c.008-.145.03-1.52.03-1.67c.002-.512.167-3.63-.024-5.545m-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976c-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35c-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12c.696-.77 1.608-1.164 2.74-1.164c1.311 0 2.302.5 2.962 1.498l.638 1.06l.638-1.06c.66-.999 1.65-1.498 2.96-1.498c1.13 0 2.043.395 2.74 1.164c.675.77 1.012 1.81 1.012 3.12z"
//       />
//     </svg>
//   )
// }