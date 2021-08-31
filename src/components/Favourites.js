import React from 'react'
import NavBar from './pageNav/NavBar'

class Favourites extends React.Component {
  render () {
    return (
      <div className='Favourites'>
        <NavBar />
        <h1>Favourites Page!</h1>
        <footer>Curation Project</footer>
      </div>
    )
  }
}

export default Favourites