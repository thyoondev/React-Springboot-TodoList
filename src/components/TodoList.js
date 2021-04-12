//게시글 리스트을 개별적으로 뿌려주고 정렬을 하는 컴포넌트

import React from "react";
import styled, { css } from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  display: flex;
  overflow-y: auto;
`;
const TodoListBlockInner = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
  //border: 1px solid red;
`;
const TodoListProcessTitle = styled.p`
  ${(props) =>
    props.processValue === 0
      ? css`
          background-color: #fab1a0;
        `
      : props.processValue === 1
      ? css`
          background-color: #ffeaa7;
        `
      : css`
          background-color: #98ddca;
        `}
  width: 60px;
  border-radius: 5px;
  text-align: center;
  padding: 0px 5px;
`;

//프로세스 상태에 따라 출력
const showListProcess = (
  todos,
  processState,
  removeItem,
  pinItem,
  toggleProcessState
) => {
  return todos.map(
    (todo) =>
      todo.process === processState && (
        <TodoItem
          key={todo.id}
          todo={todo}
          removeItem={removeItem}
          pinItem={pinItem}
          toggleProcessState={toggleProcessState}
        />
      )
  );
};

function TodoList(props) {
  const { todos, removeItem, pinItem, toggleProcessState } = props;
  //ADD pin function and array sort
  todos.sort((a, b) => a.id - b.id);
  todos.sort((a, b) => a.priority - b.priority);

  return (
    <TodoListBlock>
      <TodoListBlockInner>
        <TodoListProcessTitle processValue={0}>진행 전</TodoListProcessTitle>
        {showListProcess(todos, 0, removeItem, pinItem, toggleProcessState)}
      </TodoListBlockInner>
      <TodoListBlockInner>
        <TodoListProcessTitle processValue={1}>진행 중</TodoListProcessTitle>
        {showListProcess(todos, 1, removeItem, pinItem, toggleProcessState)}
      </TodoListBlockInner>
      <TodoListBlockInner>
        <TodoListProcessTitle processValue={2}>완료 🙌</TodoListProcessTitle>
        {showListProcess(todos, 2, removeItem, pinItem, toggleProcessState)}
      </TodoListBlockInner>
    </TodoListBlock>
  );
}

export default TodoList;
