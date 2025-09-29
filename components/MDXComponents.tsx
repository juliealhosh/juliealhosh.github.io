import React from 'react'
import Image from 'next/image'

// Custom component for the <figure> tag
// It receives all the content nested inside the <figure> as children.
const Figure = ({ children }) => {
  return (
    <figure style={{ margin: '20px 0', border: '1px solid #ccc', padding: '10px' }}>
      {children}
    </figure>
  )
}

// Custom component for the <figcaption> tag
// It receives the caption text as children.
const FigCaption = ({ children }) => {
  return (
    <figcaption style={{ fontSize: '0.9em', color: '#666', marginTop: '5px' }}>
      {children}
    </figcaption>
  )
}

// Custom component for the <div> tag
// You can use this to wrap your content and apply styles.
const Div = ({ children, style }) => {
  return <div style={style}> {children} </div>
}

const Img = ({ children, style }) => {
  return <img style={style}> {children} </img>
}

// This component map tells MDX how to render specific HTML tags.
export const components = {
  // Overwrite the built-in <img> element with a custom one if needed, or leave it.
  // For this example, we will let MDX handle the basic <img> tag.
  figure: Figure,
  figcaption: FigCaption,
  div: Div,
  img: Img,
}
