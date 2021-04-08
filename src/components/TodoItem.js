//게시글에 해당하는 배열 오브젝트를 하나하나 따로 받아 화면에 렌더링해주는 컴포넌트

import React from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDelete, MdFlag } from "react-icons/md";
import moment from "moment";
import "moment/locale/ko"; // 이줄 추가

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

const AddPin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    color: #edd27e;
  }

  ${(state) =>
    state.priority === 1
      ? css`
          color: #edd27e;
          display: block;
        `
      : css`
          color: #dee2e6;
          display: none;
        `}
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: block;
    }
    ${AddPin} {
      display: block;
    }
  }
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

const CreateDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 14px;
  font-style: italic;
  margin-right: 10px;
`;

function TodoItem(props) {
  const { todo, removeItem, toggleItem, pinItem } = props;

  //배열 오브젝트의 createdDate와 현재 날짜를 비교해 반환해줌
  let addDate = moment(todo.createdDate, "YYYYMMDDHHmmss").fromNow();
  return (
    <TodoItemBlock>
      {/* task toggle button*/}
      <CheckCircle done={todo.done} onClick={() => toggleItem(todo.id)}>
        {todo.done && <MdDone />}
      </CheckCircle>
      <Text done={todo.done}>{todo.text}</Text>
      {/* createdDate text */}
      <CreateDate>{addDate}</CreateDate>
      {/* task pin button */}
      <AddPin onClick={() => pinItem(todo.id)} priority={todo.priority}>
        <MdFlag />
      </AddPin>
      {/* task remove button */}
      <Remove onClick={() => removeItem(todo.id)}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default TodoItem;
