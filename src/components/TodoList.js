//게시글 리스트을 개별적으로 뿌려주고 정렬을 하는 컴포넌트

import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList(props) {
  const { todos, removeItem, toggleItem, pinItem } = props;
  //ADD pin function and array sort
  todos.sort((a, b) => a.id - b.id);
  todos.sort((a, b) => b.priority - a.priority);
  return (
    <TodoListBlock>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          removeItem={removeItem}
          toggleItem={toggleItem}
          pinItem={pinItem}
        />
      ))}
    </TodoListBlock>
  );
}

export default TodoList;
