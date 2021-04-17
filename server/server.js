const path = require('path')
const express = require('express')
const cors = require('cors')
const request = require('superagent')

const routes = require('./routes/routes')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use(cors('*'))

server.use('/api/v1/starwars/starships', routes)


module.exports = server

// Get the starships
server.get('/api/v1/starwars/starships/:starship', (req, res) => {
  const starship = req.params.starship
  return request
    .get(`https://swapi.dev/api/starships/${starship}`)
    .then(response => {
      return res.json(response.body)
    })
    .catch(err => {
      console.log(err)
    })
})

// Get the planets

// Get the characters
