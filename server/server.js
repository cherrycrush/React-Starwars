const path = require('path')
const express = require('express')
const cors = require('cors')
const request = require('superagent')

const routes = require('./routes/routes')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use(cors('*'))

server.use('/api/v1/starwars', routes)


module.exports = server

// Get the starships
server.get('/api/v1/starwars/starships/:id', (req, res) => {
  const starship = req.params.id
  return request
    .get(`http://www.swapi.tech/api/planets/${starship}`)
    .then(res => {
      return res.json(res.body)
    })
    .catch(err => {
      console.log(err)
    })
})

// Get the planets

// Get the characters
