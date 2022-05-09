import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {
    isSubscribed: false,
  }

  onSubscribed = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  getButtonText = () => {
    const {isSubscribed} = this.state

    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const value = this.getButtonText()
    return (
      <div className="welcome-bg-container">
        <div className="welcome-text-container">
          <h1 className="heading">Welcome</h1>
          <p className="description">Thank you!Happy Learning</p>
          <button type="button" className="button" onClick={this.onSubscribed}>
            {value}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
