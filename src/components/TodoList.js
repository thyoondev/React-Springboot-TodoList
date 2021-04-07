import React, { Component } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

class TodoList extends Component {
  render() {
    const { todos, listRemove, listToggle, listPin } = this.props;
    //핀기능 추가
    todos.sort((a, b) => a.id - b.id);
    todos.sort((a, b) => b.priority - a.priority);
    return (
      <TodoListBlock>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            done={todo.done}
            priority={todo.priority}
            listRemove={listRemove}
            listToggle={listToggle}
            listPin={listPin}
          />
        ))}
      </TodoListBlock>
    );
  }
}

export default TodoList;
