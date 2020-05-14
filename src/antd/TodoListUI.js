import React from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';

const TodoListUI = (props) => {
  return (
    <div style={{ marginTop: '10px', marginLeft: '10px' }}>
      <div style={{ marginBottom: '10px' }}>
        <Input
          value={props.inputValue}
          placeholder="todoInfo"
          style={{ width: '300px', marginRight: '20px' }}
          onChange={props.handleInputChange}
        />
        <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
      </div>
      <List
        style={{ width: '300px' }}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item onClick={() => { props.handleItemDelete(index) }}>
            {item}
          </List.Item>
        )}
      />
    </div>
  )
}

export default TodoListUI