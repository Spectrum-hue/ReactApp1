import React from 'react'
//bootstrap imports
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
//component imports
import NavBar from './pageNav/NavBar'
//styling imports
import './page.css'
//bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css'
//Login component that must be used in order to pass through to products and shopping cart.
class Login extends React.Component {
  //   constructor (props) {
  //     super(props)
  // this.state = {
  //   username: '',
  //   password: '',
  //   loggedIn: 0
  // }
  //binding of the methods in this page for React to recognise and to be used.
  // this.handleUsername = this.handleUsername.bind(this)
  // this.handlePassword = this.handlePassword.bind(this)
  // this.onSubmit = this.onSubmit.bind(this)
  //}
  //user name handling that takes the event(e) in the browser and assign a new value
  //   handleUsername (e) {
  //     this.setState({
  //       username: e.target.value
  //     })
  //   }
  //password handling that takes the event(e) in the browser and assign a new value
  //   handlePassword (e) {
  //     this.setState({
  //       password: e.target.value
  //     })
  //   }

  //   onSubmit () {
  //     fetch('/login', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({
  //         username: this.state.username,
  //         password: this.state.password
  //       })
  //     })
  //       .then(res => res.json())
  //       .then(res => {
  //         if (res.user) {
  //           alert("You are logged in! Here's your token: " + res.user)
  //           this.setState({ loggedIn: 1 })
  //         } else {
  //           alert('Incorrect Login frontend!')
  //         }
  //       })
  //       .catch(error => console.log(error))
  //   }

  render () {
    //let componentToDisplay = <div></div>
    //logIn variable with form and methods included.
    let logIn = (
      <div className='LoginDiv'>
        <br />
        <h1>Login:</h1>
        <Form className='LoginForm'>
          <Form.Group controlId='formGroupEmail'>
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type='username'
              placeholder='Enter Username'
              onChange={this.handleUsername}
            />
          </Form.Group>
          <Form.Group controlId='formGroupPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='username'
              placeholder='Enter Password'
              onChange={this.handlePassword}
            />
          </Form.Group>
          <Form.Group>
            <Button type='button' onClick={this.onSubmit}>
              Sign in
            </Button>
          </Form.Group>
        </Form>
      </div>
    )
    // if (this.state.loggedIn === 0) {
    //   componentToDisplay = logIn
    // } else if (this.state.loggedIn === 1) {
    //   componentToDisplay = <Products />
    // }
    return (
      <div className='loginPage'>
        <NavBar />
        {logIn}
        <footer>Curation Project</footer>
      </div>
    )
  }
}
//exporting of component.
export default Login