const React = require('react')
const Default = require('./layouts/Default')

function error() {
      return (
        <Default>
            <h3>ERROR 404: NOT FOUND</h3>
        </Default>
      )
  }
  
module.exports = error
