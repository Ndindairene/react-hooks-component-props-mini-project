import React from 'react'

function Article({title, date, preview}) {
    const defaultValue = "January 1, 1970"
  return (
    <article>
        <h3>{title}</h3>
        <small>{date || defaultValue}</small>
        <p>{preview}</p>
    </article>
  )
}

export default Article

