//게시글에 해당하는 배열 오브젝트를 하나하나 따로 받아 화면에 렌더링해주는 컴포넌트

import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdMenu, MdClose, MdDelete, MdFlag } from "react-icons/md";
import moment from "moment";
import "moment/locale/ko"; // 이줄 추가
import "./Item.css";

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: gray;
  margin-right: 5px;
  font-size: 18px;
  &:hover {
    color: #dee2e6;
  }
`;
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
        `
      : css`
          color: #dee2e6;
        `}
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  border: 1px solid #ced4da;
  border-radius: 8px;
  margin-top: 5px;
  //cursor: pointer;
  width: 100%;
  height: 80px;
  box-shadow: 1px 1px 3px 0px #ced4da;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const Text = styled.div`
  flex: 1;
  font-size: 14px;
  color: #495057;
  word-break: keep-all;
  ${(props) =>
    props.process === 2 &&
    css`
      color: #ced4da;
    `}
`;

const CreateDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: gray;
  font-size: 6px;
  font-style: italic;
  margin-right: 10px;
`;

const ChangeProcessState = styled.div`
  border: 0px;
  outline: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
`;
const NowProcessState = styled.div`
  border: 0px;
  outline: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
`;
const ProcessStateCircle = styled.button`
  min-width: 14px;
  min-height: 14px;
  border: 0px;
  border-radius: 50%;
  margin: 5px 15px 5px 15px;
  outline: none;
  cursor: pointer;
  ${(props) =>
    props.process === 0
      ? css`
          background-color: #ff7675;
        `
      : props.process === 1
      ? css`
          background-color: #fdcb6e;
        `
      : css`
          background-color: #38d9a9;
        `}
  &:hover {
    border: 1px solid gray;
  }
`;

const ViewText = styled.div`
  white-space: pre-wrap; //공백을 코드에 있는 그대로 표시함, 코드에 줄바꿈이 없어도 자동 줄바꿈이 됨
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  cursor: pointer;
`;
const Priority = styled.div`
  font-size: 10px;
  padding: 2px 3px;
  background-color: #fab1a0;
  border-radius: 3px;
  text-align: center;
  margin: 5px 0px;
  width: 70px;
  ${(props) =>
    props.priority === 0
      ? css`
          background-color: #ffaaa7;
        `
      : props.priority === 1
      ? css`
          background-color: #ffd3b4;
        `
      : css`
          background-color: #d5ecc2;
        `}
`;

const Author = styled.div`
  font-size: 10px;
  padding: 2px 10px;
  background-color: #dfe0df;
  max-width: 30px;
  border-radius: 3px;
  color: #495057;
`;

function TodoItem(props) {
  const { todo, removeItem, pinItem, toggleProcessState } = props;
  const [processToggle, setProcessToggle] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);

  //배열 오브젝트의 createdDate와 현재 날짜를 비교해 반환해줌
  let addDate = moment(todo.createdDate, "YYYYMMDDHHmmss").fromNow();

  //웹 링크 처리
  let rawString = todo.title;
  let expUrl = new RegExp(
    "(http|https|ftp|telnet|news|irc)://([-/.a-zA-Z0-9_~#%$?&=:200-377()]+)",
    "gi"
  );
  let result = rawString.match(expUrl);

  //텍스트에 htt 가 포함되면 a태그로 감싸주고 포함되어있지않으면 raw string 그대로 출력
  const getText = () => {
    if (todo.title.indexOf(result) !== -1) {
      return rawString.replace(
        result,
        `<a href="${result}" target="_blank"> ${result} </a>`,
        todo.text
      );
    } else {
      return todo.title;
    }
  };

  return (
    <TodoItemBlock title={todo.title}>
      {/* 프로세스 상태 관리 조건부 렌더링 */}
      <div onClick={() => setProcessToggle(!processToggle)}>
        {processToggle ? (
          <ChangeProcessState>
            <ProcessStateCircle
              process={0}
              onClick={() => toggleProcessState(todo.id, 0)}
              title="진행 전"
            ></ProcessStateCircle>
            <ProcessStateCircle
              process={1}
              onClick={() => toggleProcessState(todo.id, 1)}
              title="진행 중"
            ></ProcessStateCircle>
            <ProcessStateCircle
              process={2}
              onClick={() => toggleProcessState(todo.id, 2)}
              title="완료"
            ></ProcessStateCircle>
          </ChangeProcessState>
        ) : (
          <NowProcessState>
            <ProcessStateCircle
              process={todo.process}
              title="진행 상태 변경"
            ></ProcessStateCircle>
          </NowProcessState>
        )}
      </div>
      {/*내용 출력 */}
      <ContentBox onClick={() => alert("클릭테스트")}>
        <Text process={todo.process}>
          <ViewText dangerouslySetInnerHTML={{ __html: getText() }} />
        </Text>
        <Priority priority={todo.priority}>
          우선 순위 {todo.priority} {todo.priority === 0 && "🔥"}
        </Priority>
        <Author>{todo.author}</Author>
        <CreateDate>{addDate}</CreateDate>
      </ContentBox>
      {/* createdDate text
      <CreateDate>{addDate}</CreateDate>*/}

      {/* 메뉴 버튼 */}
      <div onClick={() => setMenuToggle(!menuToggle)}>
        {menuToggle ? (
          <div>
            <Menu>
              <MdClose />
            </Menu>
            <AddPin>
              <MdFlag
                onClick={() => pinItem(todo.id)}
                priority={todo.priority}
              />
            </AddPin>
            <Remove>
              <MdDelete onClick={() => removeItem(todo.id)} />
            </Remove>
          </div>
        ) : (
          <Menu>
            <MdMenu />
          </Menu>
        )}
      </div>
    </TodoItemBlock>
  );
}

export default TodoItem;
