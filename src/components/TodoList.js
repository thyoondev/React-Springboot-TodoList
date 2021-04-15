//게시글 리스트을 개별적으로 뿌려주고 정렬을 하는 컴포넌트

import React from 'react';
import { useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import TodoItem from './TodoItem';
import DetailPage from './DetailPage';

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
const TodoListProcessTitleBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const TodoListProcessTitleBoxInner = styled.div`
  flex: 1;
`;
const TodoListProcessTitle = styled.div`
  max-width: 70px;
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
  border-radius: 5px;
  text-align: center;
  padding: 0px 5px;
  margin: 10px 0px 10px 32px;

  color: #495057;
`;

//프로세스 상태에 따라 출력
const showListProcess = (todoList, processValue) => {
  return todoList.map(
    (todo) =>
      todo.process === processValue && <TodoItem key={todo.id} todo={todo} />,
  );
};

function TodoList(props) {
  const todoList = useSelector((store) => store.todoList);
  //ADD pin function and array sort
  todoList.sort((a, b) => a.id - b.id);
  todoList.sort((a, b) => a.priority - b.priority);

  return (
    <>
      <DetailPage />
      <TodoListProcessTitleBox>
        <TodoListProcessTitleBoxInner>
          <TodoListProcessTitle processValue={0}>진행 전</TodoListProcessTitle>
        </TodoListProcessTitleBoxInner>
        <TodoListProcessTitleBoxInner>
          <TodoListProcessTitle processValue={1}>진행 중</TodoListProcessTitle>
        </TodoListProcessTitleBoxInner>
        <TodoListProcessTitleBoxInner>
          <TodoListProcessTitle processValue={2}>완료 🙌</TodoListProcessTitle>
        </TodoListProcessTitleBoxInner>
      </TodoListProcessTitleBox>
      <TodoListBlock>
        <TodoListBlockInner>{showListProcess(todoList, 0)}</TodoListBlockInner>
        <TodoListBlockInner>{showListProcess(todoList, 1)}</TodoListBlockInner>
        <TodoListBlockInner>{showListProcess(todoList, 2)}</TodoListBlockInner>
      </TodoListBlock>
    </>
  );
}

export default TodoList;
