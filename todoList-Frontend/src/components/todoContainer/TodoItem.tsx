//게시글에 해당하는 배열 오브젝트를 하나하나 따로 받아 화면에 렌더링해주는 컴포넌트

import styled, { css } from 'styled-components';
import { MdDelete } from 'react-icons/md';
import 'moment/locale/ko';
import TodoContent from './TodoContent';
import { useDispatch, useSelector } from 'react-redux';
import { inistateTypes, todoTypes } from '../../common/typeInterface/types';
import { deletePost } from '../../common/action/Action';

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const TodoItemBlock = styled.div<any>`
  display: flex;
  align-items: center;
  padding: 15px;
  margin-top: 6px;
  width: 90%;
  height: 80px;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    ${Remove} {
      display: flex;
    }
  }
  ${(props) =>
    props.isDarkModeActive &&
    css`
      background-color: rgba(0, 0, 0, 0.2);
      transition: background-color 2s;
      border: 1px solid rgba(0, 0, 0, 0.1);
      transition: border 2s;
      box-shadow: none;
    `}
  @media screen and (max-width: 768px) {
    max-width: 40%;
  }
`;

function TodoItem(props: any) {
  const todo: todoTypes = props.todo;
  const isDarkModeActive = useSelector((store: inistateTypes) => store.isDarkModeActive);
  const dispatch = useDispatch();
  const onRemove = () => {
    dispatch(deletePost(todo.id));
  };

  return (
    <>
      <TodoItemBlock title={todo.title} isDarkModeActive={isDarkModeActive}>
        <TodoContent todo={todo} onClick={() => props.clickHandler(todo)} />
        <Remove>
          <MdDelete onClick={onRemove} />
        </Remove>
      </TodoItemBlock>
    </>
  );
}

export default TodoItem;
