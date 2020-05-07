import React, { Component, Fragment } from 'react';
import './style.css'
import TodoItem from "./TodoItem"
import Axios from 'axios';

class TodoList extends Component {

  constructor(props) {
    super(props)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
    this.state = {
      inputValue: '',
      list: []
    }
  }

  componentDidMount() {
    Axios.get('api/todolist').then(res => {
      this.setState(() => ({
        list: [...res.data]
      }))
    }).catch(err => {
      console.warn(err)
    })
  }

  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="insertArea">输入内容</label>
          <input
            id="insertArea"
            className="input"
            ref={(input) => { this.input = input }}
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    )
  }

  getTodoItem() {
    return (
      this.state.list.map((item, index) => {
        return (
          <TodoItem
            content={item}
            key={index}
            index={index}
            deleteItem={this.handleItemDelete}
          />
        )
      })
    )
  }

  handleInputChange(e) {
    const value = e.target.value
    this.setState(() => ({
      inputValue: value
    }))
  }

  handleBtnClick() {
    if (this.state.inputValue.trim().length === 0) return
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
  }

  handleItemDelete(index) {
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index, 1)
      return { list }
    })
  }
}

export default TodoList