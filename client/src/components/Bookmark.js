import React from 'react'

function Bookmark (props) {
  const { title, url } = props
  return (
    <li>
      {title} (<a href={url} target="_blank">Visit</a>)
    </li>
  )
}

export default Bookmark
