import React, { useEffect, useState } from 'react'
import { getStarships } from '../apiClient'

function Starship () {
	const [showDetails, setShowDetails] = useState(false)
	const [starshipData, setStarship] = useState({
		name: '',
		model: '',
		crew: 0,
		starship_class: ''
	})

	useEffect(() => {
		getStarships('10')
		.then(data => {
			console.log(data)
			setStarship(data)
			return null
		})
		.catch(err => {
			console.log(err)
		})
	}, [])

	function handleClick () {
		setShowDetails(!showDetails)
	}

	return (
		<>
			<div className="content">
				<p>Model: {starshipData.model}</p>
				{showDetails && <>
					<p>Manufacturer: {starshipData.manufacturer}</p>
					<p>Crew: {starshipData.crew}</p>
					<p>Starship Class: {starshipData.starship_class}</p>
					</> }
					<button type="button" className="btn btn-warning" onClick={handleClick}>{showDetails ? 'Hide' : 'Show'} details</button>
			</div>
		</>
	)
}

export default Starship