import React, { Component, Fragment } from 'react';

class TodoList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      inputValue: 'hello',
      list: []
    }
  }

  render() {
    return (
      <Fragment>
        <div>
          <input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)} />
          <button>提交</button>
        </div>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </Fragment>
    )
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
    console.log(this.state)
  }
}

export default TodoList