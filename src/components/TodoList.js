//게시글 리스트을 개별적으로 뿌려주고 정렬을 하는 컴포넌트

import React from "react";
import styled, { css } from "styled-components";
import { useTodoState } from "../store";
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
const showListProcess = (todoList, processValue) => {
  return todoList.map(
    (todo) =>
      todo.process === processValue && <TodoItem key={todo.id} todo={todo} />
  );
};

function TodoList(props) {
  const todoList = useTodoState();
  //ADD pin function and array sort
  todoList.sort((a, b) => a.id - b.id);
  todoList.sort((a, b) => a.priority - b.priority);

  return (
    <TodoListBlock>
      <TodoListBlockInner>
        <TodoListProcessTitle processValue={0}>진행 전</TodoListProcessTitle>
        {showListProcess(todoList, 0)}
      </TodoListBlockInner>
      <TodoListBlockInner>
        <TodoListProcessTitle processValue={1}>진행 중</TodoListProcessTitle>
        {showListProcess(todoList, 1)}
      </TodoListBlockInner>
      <TodoListBlockInner>
        <TodoListProcessTitle processValue={2}>완료 🙌</TodoListProcessTitle>
        {showListProcess(todoList, 2)}
      </TodoListBlockInner>
    </TodoListBlock>
  );
}

export default TodoList;
