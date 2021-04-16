import React from 'react'

const Card = (props) => {
  const { name } = props
  return (
    <h1 className="heading">Hello, {name}</h1>
  )
}

export default Card