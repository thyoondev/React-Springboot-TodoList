//게시글에 해당하는 배열 오브젝트를 하나하나 따로 받아 화면에 렌더링해주는 컴포넌트

import React, { Component } from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDelete, MdFlag } from "react-icons/md";

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

class TodoItem extends Component {
  render() {
    const {
      id,
      done,
      text,
      priority,
      listRemove,
      listToggle,
      listPin,
    } = this.props;

    return (
      <TodoItemBlock>
        {/* task toggle button*/}
        <CheckCircle done={done} onClick={() => listToggle(id)}>
          {done && <MdDone />}
        </CheckCircle>
        <Text done={done}>{text}</Text>
        {/* task pin button */}
        <AddPin onClick={() => listPin(id)} priority={priority}>
          <MdFlag />
        </AddPin>
        {/* task remove button */}
        <Remove onClick={() => listRemove(id)}>
          <MdDelete />
        </Remove>
      </TodoItemBlock>
    );
  }
}

export default TodoItem;
