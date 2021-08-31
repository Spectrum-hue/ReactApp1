import React from 'react'
import NavBar from './pageNav/NavBar'

class About extends React.Component {
  render () {
    return (
      <div className='About'>
        <NavBar />
        <h1>About Page!</h1>
        <footer>Curation Project</footer>
      </div>
    )
  }
}

export default About