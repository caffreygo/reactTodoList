import React, { Component, Fragment } from 'react'
import './style.css'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      show: true
    }
    this.handleToggle = this.handleToggle.bind(this)
  }

  render() {
    return (
      <Fragment>
        <div className={this.state.show ? 'show' : 'hide'}>hello</div>
        <button onClick={this.handleToggle}>Toggle</button>
      </Fragment>
    )
  }

  handleToggle() {
    this.setState((prevState) => {
      return {
        show: prevState.show ? false : true
      }
    })
  }
}

export default App