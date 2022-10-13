// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {firstName: '', lastName: '', clicked: false}

  onClickedSuccess = () => {
    this.setState({clicked: false})
  }

  onFirstName = event => {
    console.log(event.target.value)
    if (event.target.value === '') {
      this.setState({firstName: true})
    } else {
      this.setState({firstName: false})
    }
  }

  onLastName = event => {
    console.log(event.target.value)
    if (event.target.value === '') {
      this.setState({lastName: true})
    } else {
      this.setState({lastName: false})
    }
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    console.log('button')
    if (firstName !== '' && lastName !== '') {
      this.setState({clicked: true})
    }
    if (firstName === '') {
      this.setState({firstName: true})
    }
    if (lastName === '') {
      this.setState({lastName: true})
    }
  }

  render() {
    const {firstName, lastName, clicked} = this.state
    if (clicked === true) {
      return (
        <div className="app-container">
          <h1 className="heading">Registration</h1>
          <div className="form-container">
            <img
              className="success-icon"
              alt="success"
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
            />
            <p className="success-para">Submitted Successfully</p>
            <button
              type="button"
              className="button-class"
              onClick={this.onClickedSuccess}
            >
              Submit another response
            </button>
          </div>
        </div>
      )
    }

    return (
      <div className="app-container">
        <h1 className="heading">Registration</h1>
        <form className="form-container" onSubmit={this.onSubmitForm}>
          <div className="input-container">
            <label htmlFor="first-name" className="label-class">
              FIRST NAME
            </label>
            <input
              type="text"
              className="first-name"
              id="first-name"
              placeholder="First name"
              onBlur={this.onFirstName}
            />
            {firstName && <p className="error-msg">Required</p>}
          </div>
          <div className="input-container">
            <label htmlFor="last-name" className="label-class">
              LAST NAME
            </label>
            <input
              type="text"
              className="last-name"
              id="last-name"
              placeholder="Last name"
              onBlur={this.onLastName}
            />
            {lastName && <p className="error-msg">Required</p>}
          </div>
          <div className="button-container">
            <button type="submit" className="button-class">
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }
}
export default RegistrationForm
