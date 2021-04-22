import React, { useEffect, useState } from 'react'
import { getStarships } from '../apiClient'

function Starship (props) {
	const [showDetails, setShowDetails] = useState(false)
	const [starshipData, setStarship] = useState({
		name: '',
		model: '',
		crew: 0,
		starship_class: ''
	})

	useEffect(() => {
		getStarships(props.starshipId)
		.then(data => {
			console.log(data)
			setStarship(data)
			return null
		})
		.catch(err => {
			console.log(err)
		})
	}, [props.starshipId])

	function handleClick () {
		setShowDetails(!showDetails)
	}

	return (
		<>
		<div className="container"></div>
			<div className="card">
				<img className="card-img-top" src="/images/Death_star1.png" alt="Card image" />
			</div>
			<h1 className="heading">{starshipData.name}</h1>
			<div className="content">
				<p>Model: {starshipData.model}</p>
				{showDetails && <>
					<p>Manufacturer: {starshipData.manufacturer}</p>
					<p>Crew: {starshipData.crew}</p>
					<p>Class: {starshipData.starship_class}</p>
					<p>Cost: {starshipData.cost_in_credits}</p>
					</> }
					<button type="button" className="btn btn-warning" onClick={handleClick}>{showDetails ? 'Hide' : 'Show'} details</button>
			</div>
		</>
	)
}

export default Starship