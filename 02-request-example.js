var superagent = require('superagent')

superagent
  .get('http://ada-dog-facts.herokuapp.com/facts/random')
  .end(function(error, response) {
    if (error) {
      console.log(error)
      return
    }

    console.log('Status code:', response.status)
    console.log('Body:', response.body)
  })
