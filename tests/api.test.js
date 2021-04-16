const request = require('supertest')
const server = require('../server/server.js')

test('starships/9 route returns deathstar object', () => {
  const expected = true

  return request(server)
    .get('/starships/9')
    .expect('Content-Type', /json/)
    .expect(200)
    .then(res => {
      expect(Object.isObject(req.body)).toBeTruthy()
    })
})