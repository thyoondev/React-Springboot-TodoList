import moment from "moment";
import "moment/locale/ko";
import React from "react";
import styled, { css } from "styled-components";
import "./Item.css";

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
  justify-content: flex-end;
  color: gray;
  font-size: 6px;
  font-style: italic;
  margin-right: 10px;
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
  color: #495057;
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
const Content = (props) => {
  const { todo } = props;
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
    <ContentBox>
      <Text process={todo.process}>
        <ViewText dangerouslySetInnerHTML={{ __html: getText() }} />
      </Text>
      <Priority priority={todo.priority}>
        우선 순위 {todo.priority} {todo.priority === 0 && "🔥"}
      </Priority>
      <Author>{todo.author}</Author>
      <CreateDate>{addDate}</CreateDate>
    </ContentBox>
  );
};

export default Content;
