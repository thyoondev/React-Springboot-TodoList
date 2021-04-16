//게시글 리스트을 개별적으로 뿌려주고 정렬을 하는 컴포넌트

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import TodoItem from './TodoItem';
import ModalEdit from './ModalEdit';
import { showModalCreate } from '../store';
import ModalWrite from './ModalWrite';

const TodoListBlock = styled.div`
  display: flex;
  overflow-y: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;
const TodoListBlockInner = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
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
          background-color: #fec3a6;
        `
      : props.processValue === 1
      ? css`
          background-color: #efe9ae;
        `
      : css`
          background-color: #cdeac0;
        `}
  border-radius: 5px;
  text-align: center;
  padding: 0px 5px;
  margin: 10px 0px 10px 32px;

  color: #495057;
`;

const CreateItem = styled.div`
  color: #495057;
  cursor: pointer;
  padding: 15px;
  display: flex;
  align-items: center;
  border-radius: 20px;
  width: 260px;
  margin-top: 6px;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;
function TodoList(props) {
  const todoList = useSelector((store) => store.todoList);
  const modal = useSelector((store) => store.showModal);
  //ADD pin function and array sort
  todoList.sort((a, b) => a.id - b.id);
  todoList.sort((a, b) => a.priority - b.priority);

  //프로세스 상태에 따라 출력
  const showListProcess = (todoList, processValue) => {
    return todoList.map(
      (todo) =>
        todo.process === processValue && <TodoItem key={todo.id} todo={todo} />,
    );
  };

  const dispatch = useDispatch();
  const onModalCreate = () => dispatch(showModalCreate());
  return (
    <>
      {modal.showEdit &&
        todoList.map(
          (todo) =>
            todo.id === modal.id && <ModalEdit key={todo.id} todo={todo} />,
        )}
      {modal.showCreate && <ModalWrite />}

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
        <TodoListBlockInner>
          {showListProcess(todoList, 0)}
          <CreateItem onClick={onModalCreate}>
            <MdAdd />
            새로 만들기
          </CreateItem>
        </TodoListBlockInner>
        <TodoListBlockInner>
          {showListProcess(todoList, 1)}
          <CreateItem onClick={onModalCreate}>
            <MdAdd />
            새로 만들기
          </CreateItem>
        </TodoListBlockInner>
        <TodoListBlockInner>
          {showListProcess(todoList, 2)}
          <CreateItem onClick={onModalCreate}>
            <MdAdd />
            새로 만들기
          </CreateItem>
        </TodoListBlockInner>
      </TodoListBlock>
    </>
  );
}

export default TodoList;
