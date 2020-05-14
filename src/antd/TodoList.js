import React, { Component } from 'react';
import store from '../store';
import TodoListUI from './TodoListUI';
import { getInputChangeAction, getAddItemAction, getDeleteItemAction, getTodoList } from '../store/actionCreator';

class TodoList extends Component {

  constructor(props) {
    super(props)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
    this.state = store.getState()
    store.subscribe(this.handleStoreChange)
  }

  render() {
    return (
      < TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleBtnClick={this.handleBtnClick}
        handleInputChange={this.handleInputChange}
        handleItemDelete={this.handleItemDelete}
      />
    )
  }

  componentDidMount() {
    // action是一个函数
    const action = getTodoList()
    // 调用store来dispatch action时，action函数会被自动执行
    store.dispatch(action)
  }

  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }

  handleStoreChange() {
    this.setState(store.getState())
  }

  handleItemDelete(index) {
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }

  handleBtnClick() {
    const action = getAddItemAction()
    store.dispatch(action)
  }
}

export default TodoList