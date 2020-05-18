import { takeEvery, put } from 'redux-saga/effects';
import { GET_INIT_LIST } from './actionTypes';
import axios from 'axios';
import { initListAction } from './actionCreator'

function* getInitList() {
  // generator对异步请求要用yield等待获取res
  // 通过try catch语句捕获错误
  try {
    const res = yield axios.get('/api/todolist');
    const action = initListAction(res.data)
    // !! yield put()
    yield put(action)
  } catch (e) {
    console.log('todoList 网络请求失败')
  }
}

// generator 函数
function* mySaga() {
  // sagas文件通过takeEvery捕获action，执行对应的方法
  yield takeEvery(GET_INIT_LIST, getInitList)
}

export default mySaga;