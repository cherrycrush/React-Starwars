import React from 'react'

export default function Nav (props) {

  function handleClick (e, id) {
    e.preventDefault()
    props.setStarshipId(id)
  }

  return (
    <>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link" onClick={(evt) => handleClick(evt, '9')} >Deathstar</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={(evt) => handleClick(evt, '10')}>Millennium Falcon</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={(evt) => handleClick(evt, '11')}>Y-Wing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={(evt) => handleClick(evt, '12')}>X-Wing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={(evt) => handleClick(evt, '13')}>TIE Advanced x1</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={(evt) => handleClick(evt, '15')}>Executor</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={(evt) => handleClick(evt, '17')}>Rebel Transport</a>
        </li>
      </ul>
    </>
  )
}

//TIE Advanced x1 13
//Executor 15
//Rebel transport 17