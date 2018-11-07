var chai = require('chai')
var expect = chai.expect
var supertest = require('supertest')

// supertest lets us easily test our API
var api = supertest('http://ada-dog-facts.herokuapp.com')

describe('GET /facts/random', function() {
  // tests to see if we get a 200 status code when we send a GET request
  it('returns a 200 status code', function(done) {
    api
      .get('/facts/random') // make the request
      .expect(200) // expect a 200 response code
      .end(done) // pass the `done` callback so we know when this test is finished
  })

  // tests to see if the body of the response contains a number called `id`
  it('returns the fact id', function(done) {
    api
      .get('/facts/random') // make the request
      .expect(function(response) {
        // this expect callback gets given the response
        // we can use chai to make assertions about it in here
        expect(response.body.id).to.be.a('number')
      })
      .end(done) // pass the `done` callback so we know when this test is finished
  })

  // TASK 1:
  // copy the previous test and adapt it to check that response contains a
  // string called `fact`:
  it('returns ths fact content')
})

describe('GET /facts/:factId', function() {
  // TASK 2:
  // copy a test from above and adapt it to check that a GET request to
  // /facts/1 returns a 200 status code
  it('returns 200 when the fact exists')

  // checks to see if the body matches a particular object:
  it('returns the fact with id 1', function(done) {
    api
      .get('/facts/1') // make the request
      // expect the body of the response to match this object:
      .expect({
        id: 1,
        fact:
          'Ancient Egyptians revered their dogs. When a pet dog would die, the owners shaved off their eyebrows, smeared mud in their hair, and mourned aloud for days.'
      })
      .end(done) // pass the `done` callback so we know when this test is finished
  })

  // TASK 3:
  // copy a test from above and adapt it to check that /facts/19 returns the
  // fact "Dogs have sweat glands in between their paws."
  it('returns the fact with id 5')

  // TASK 4:
  // copy a test from above and adapt it to check that a request to a
  // non-existant fact id (e.g. /facts/12345) returns a 404 status code
  it('returns 404 if the fact does not exist')
})
