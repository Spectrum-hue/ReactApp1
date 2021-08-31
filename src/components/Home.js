import React from 'react'
//bootstrap imports
import NavBar from './pageNav/NavBar'
//style sheet imports
import './page.css'

class Home extends React.Component {
  render () {
    return (
      <div className='Home'>
        <NavBar />
        <h1>Home Page!</h1>
        <p>You can find all your finance curation information</p>
        <footer>Curation Project</footer>
      </div>
    )
  }
}

export default Home