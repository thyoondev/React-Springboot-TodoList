//게시글 리스트을 개별적으로 뿌려주고 정렬을 하는 컴포넌트

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import TodoItem from './TodoItem';
import ModalUpdate from '../modal/ModalUpdate';
import { getTodoList, showModalCreate } from '../../redux/store';
import ModalCreate from '../modal/ModalCreate';

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
const TodoListBlockInner = styled.div<any>`
  flex: 1;
  padding: 0px 32px 48px 32px;
  margin-top: 0px;
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
const TodoListProcessTitle = styled.div<any>`
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
  ${(props) =>
    props.isDarkModeActive &&
    css`
      background-color: #fdca40;
      transition: background-color 2s;
    `}
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

const TodoMediaTitle = styled.div<any>`
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
  justify-content: center;
  align-items: center;
  margin: 0px 0px 5px 0px;
  padding: 0px 0px;
  color: #495057;
  position: fixed;
  ${(props) =>
    props.isDarkModeActive &&
    css`
      background-color: #fdca40;
      transition: background-color 2s;
    `}
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;
const BlankBox = styled.div`
  display: none;
  min-height: 30px;
  width: 100%;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
const CreateItemTitle = styled.span<any>`
  color: #495057;
  ${(props) =>
    props.isDarkModeActive &&
    css`
      color: #fff;
      transition: color 2s;
    `}
`;

function TodoList(props: any) {
  const sortTodoList = (value: any) => {
    switch (value) {
      case 'priority':
        todoList.sort((a: any, b: any) => a.priority - b.priority);
        break;
      case 'id':
        todoList.sort((a: any, b: any) => a.id - b.id);
        break;
      default:
        break;
    }
  };

  const todoList = useSelector((store: any) => store.todoList);

  const dispatch = useDispatch();
  useEffect(() => {
    fetch('http://localhost:8080/todoList/')
      .then((res) => res.json())
      .then((res) => {
        dispatch(getTodoList(res));
        //sortTodoList('priority');
      });
  }, []);

  todoList.sort((a: any, b: any) => a.id - b.id);
  todoList.sort((a: any, b: any) => a.priority - b.priority);

  const modal = useSelector((store: any) => store.showModal);
  const isDarkModeActive = useSelector((store: any) => store.isDarkModeActive);
  const processName = ['진행 전', '진행 중', '완료 🙌'];

  //프로세스 상태에 따라 출력
  const showListProcess = (todoList: any, processValue: any) => {
    return todoList.map(
      (todo: any) =>
        todo.process === processValue && <TodoItem key={todo.id} todo={todo} />,
    );
  };

  const onModalCreate = () => dispatch(showModalCreate());

  return (
    <>
      {modal.showEdit &&
        todoList.map(
          (todo: any) =>
            todo.id === modal.id && <ModalUpdate key={todo.id} todo={todo} />,
        )}
      {modal.showCreate && <ModalCreate />}

      <TodoListProcessTitleBox>
        {processName.map((title, i) => (
          <TodoListProcessTitleBoxInner>
            <TodoListProcessTitle
              processValue={i}
              isDarkModeActive={isDarkModeActive}
            >
              {title}
            </TodoListProcessTitle>
          </TodoListProcessTitleBoxInner>
        ))}
      </TodoListProcessTitleBox>

      <TodoListBlock>
        {processName.map((title, i) => (
          <TodoListBlockInner isDarkModeActive={isDarkModeActive}>
            <TodoMediaTitle
              processValue={i}
              isDarkModeActive={isDarkModeActive}
            >
              {title}
            </TodoMediaTitle>
            <BlankBox />
            {showListProcess(todoList, i)}
            <CreateItem onClick={onModalCreate}>
              <CreateItemTitle isDarkModeActive={isDarkModeActive}>
                <MdAdd />
                새로 만들기
              </CreateItemTitle>
            </CreateItem>
          </TodoListBlockInner>
        ))}
      </TodoListBlock>
    </>
  );
}

export default TodoList;
