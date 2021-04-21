import React from 'react'
import { getStarships } from '../apiClient' 

export default function Nav () {
  return (
    <>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link" >Deathstar</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" >Millennium Falcon</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" >Y-Wing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" >X-Wing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" >TIE Advanced x1</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" >Executor</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" >Rebel Transport</a>
        </li>
      </ul>
    </>
  )
}

//TIE Advanced x1 13
//Executor 15
//Rebel transport 17