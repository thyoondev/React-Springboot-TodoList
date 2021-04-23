import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { showModalEdit } from '../../redux/store';
import './TodoContent.css';

const Text = styled.div<any>`
  flex: 1;
  font-size: 15px;
  color: #495057;
  word-break: keep-all;
  ${(props) =>
    props.isDarkModeActive &&
    css`
      color: #fff;
      transition: color 2s;
    `}
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
const Priority = styled.div<any>`
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
          background-color: #ffadad;
        `
      : props.priority === 1
      ? css`
          background-color: #ffd6a5;
        `
      : props.priority === 2
      ? css`
          background-color: #fdffb6;
        `
      : props.priority === 3
      ? css`
          background-color: #caffbf;
        `
      : props.priority === 4
      ? css`
          background-color: #9bf6ff;
        `
      : css`
          background-color: #a0c4ff;
        `}
`;

const Author = styled.div`
  font-size: 10px;
  padding: 2px 10px;
  background-color: #e5e5e5;
  width: fit-content;
  border-radius: 3px;
  color: #495057;
`;
const TodoContent = (props: any) => {
  const { todo } = props;
  //웹 링크 처리
  let rawString = todo.title;
  let expUrl = new RegExp(
    '(http|https|ftp|telnet|news|irc)://([-/.a-zA-Z0-9_~#%$?&=:200-377()]+)',
    'gi',
  );
  let result = rawString.match(expUrl);

  //텍스트에 htt 가 포함되면 a태그로 감싸주고 포함되어있지않으면 raw string 그대로 출력
  const getText = () => {
    if (todo.title.indexOf(result) !== -1) {
      return rawString.replace(
        result,
        `<a href="${result}" target="_blank"> ${result} </a>`,
        todo.text,
      );
    } else {
      return todo.title;
    }
  };
  const dispatch = useDispatch();
  const onModalEdit = () => dispatch(showModalEdit(todo.id));
  const isDarkModeActive = useSelector((store: any) => store.isDarkModeActive);
  return (
    <>
      <ContentBox onClick={onModalEdit}>
        <Text process={todo.process} isDarkModeActive={isDarkModeActive}>
          <ViewText dangerouslySetInnerHTML={{ __html: getText() }} />
        </Text>
        <Priority priority={todo.priority}>
          우선 순위 {todo.priority} {todo.priority === 0 && '🔥'}
        </Priority>
        <Author>{todo.author}</Author>
      </ContentBox>
    </>
  );
};

export default TodoContent;
