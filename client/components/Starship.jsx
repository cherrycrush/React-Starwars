import React, { useEffect, useState } from 'react'
import { fetchData } from '../apiClient'

function Starship () {
	const [showDetails, setShowDetails] = useState(false)
	const [starship, setStarship] = useState([])

	useEffect(() => fetchData().then(response => setStarship(response))
	
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