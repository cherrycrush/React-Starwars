import request from 'superagent'

const serverURL = 'http://localhost:3000/api/v1/starwars/starships'

export function getStarships (starship) {
  console.log(starship)
  console.log('starships called')
  return request
    .get(`${serverURL}/${starship}`)
    .then(res => res.body)
}