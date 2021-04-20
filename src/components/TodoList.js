//게시글 리스트을 개별적으로 뿌려주고 정렬을 하는 컴포넌트

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import TodoItem from './TodoItem';
import ModalEdit from './ModalEdit';
import { getTodoList, showModalCreate } from '../store';
import ModalWrite from './ModalWrite';

const TodoListBlock = styled.div`
  display: flex;
  overflow-y: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
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
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding-top: 0px;

  }
`;
const TodoListProcessTitleBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    display: none;
  }
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
  width: 90%;
  margin-top: 6px;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

const TodoMediaTitle = styled.div`
  display: none;
  min-width: 480px;
  height: 30px;
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
  margin: 0px 0px 5px 0px;
  padding: 0px 5px;
  color: #495057;
  @media screen and (max-width: 768px) {
    display: flex;
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

  useEffect(() => {
    fetch('http://localhost:8080/todoList/')
      .then((res) => res.json())
      .then((res) => {
        dispatch(getTodoList(res));
      });
  }, []);

  const onModalCreate = () => dispatch(showModalCreate());

  const processName = ['진행 전', '진행 중', '완료 🙌'];

  return (
    <>
      {modal.showEdit &&
        todoList.map(
          (todo) =>
            todo.id === modal.id && <ModalEdit key={todo.id} todo={todo} />,
        )}
      {modal.showCreate && <ModalWrite />}

      <TodoListProcessTitleBox>
        {processName.map((title, i) => (
          <TodoListProcessTitleBoxInner>
            <TodoListProcessTitle processValue={i}>
              {title}
            </TodoListProcessTitle>
          </TodoListProcessTitleBoxInner>
        ))}
      </TodoListProcessTitleBox>

      <TodoListBlock>
        {processName.map((title, i) => (
          <TodoListBlockInner>
            <TodoMediaTitle processValue={i}>{title}</TodoMediaTitle>
            {showListProcess(todoList, i)}
            <CreateItem onClick={onModalCreate}>
              <MdAdd />
              새로 만들기
            </CreateItem>
          </TodoListBlockInner>
        ))}
      </TodoListBlock>
    </>
  );
}

export default TodoList;
