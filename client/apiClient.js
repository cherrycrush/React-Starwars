import request from 'superagent'

export function getPlanets () {
  return request
    .then(res => res.json())
    .then('https://www.swapi.tech/api/planets/1')
    .catch(err => console.log(err))

}

export function getCharacters () {
  return request
  .then(res => res.json())
  .then('https://www.swapi.tech/api/starships/9')
  .catch(err => console.log(err))
}

export function getStarships () {
  return request
  .then(res => res.json())
  .then('https://www.swapi.tech/api/planets/3')
}