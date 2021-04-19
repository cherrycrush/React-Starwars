import React from 'react'

export const Nav = ({ model }) => {
  return (
    <div>
      <h2>Navigatior</h2>
      <ul>
        {model.map(model => {
          return <li key={starship.model}>{starship.model}</li>
        })}
      </ul>
    </div>
  )
}
