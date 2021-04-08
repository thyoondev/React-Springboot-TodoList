//하단영역 입력창 제어와 글 입력을 하는 컴포넌트

import React, { Component } from "react";
import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md";

const CircleButton = styled.button`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.125s all ease-in;
  ${(state) =>
    state.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

class TodoCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      value: "",
    };
  }

  /**
   * styled-components 제어 토글 스위치
   *
   * @param {*} open true일 경우 하단 +버튼 활성화 <-> false경우 비활성화
   */
  onToggle = (open) => {
    this.setState({
      open: !open,
    });
  };

  /**
   * 입력할 text의 value를 담는 state
   * @param {}} value
   */
  onValue = (value) => {
    this.setState({
      value: value,
    });
  };

  onChange = (e) => this.onValue(e.target.value);

  render() {
    const { listCreate, todos } = this.props;
    return (
      <>
        {this.state.open && (
          <InsertFormPositioner>
            <InsertForm
              onSubmit={(e) => {
                e.preventDefault(); // 새로고침 방지
                listCreate({
                  todo: {
                    id: todos.length + 1, //배열 전체 길이에 1씩 더해 id값 만듬
                    text: this.state.value,
                    done: false,
                    priority: 0,
                  },
                });
              }}
            >
              <Input
                autoFocus
                placeholder="할 일을 입력 후, Enter 를 누르세요"
                onChange={this.onChange}
                value={this.value}
              />
            </InsertForm>
          </InsertFormPositioner>
        )}
        <CircleButton onClick={() => this.onToggle(this.state.open)}>
          <MdAdd />
        </CircleButton>
      </>
    );
  }
}

export default React.memo(TodoCreate);
