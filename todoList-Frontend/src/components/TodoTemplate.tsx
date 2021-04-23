//템플릿 컴포넌트

import React from 'react';
import { useSelector } from 'react-redux';
import styled, { css } from 'styled-components';

const TodoTemplateBlock = styled.div<any>`
  width: 1024px;
  height: 768px;
  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  transition: background-color 2s;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(0.5px);
  -webkit-backdrop-filter: blur(0.5px);
  border-radius: 30px;
  margin: 0 auto;
  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  transition: width 50ms;
  ${(props) =>
    props.isDarkModeActive
      ? css`
          background-color: rgba(255, 255, 255, 0.1);
          transition: 'background-color 2s';
          box-shadow: none;
          border: 1px solid rgba(0, 0, 0, 0.3);
          transition: 'border 2s';
        `
      : css`
          background-color: rgba(255, 255, 255, 0.5);
          transition: 'background-color 2s';
        `}
  @media screen and (max-width: 768px) {
    width: 480px;
    height: 850px;
  }
`;

function TodoTemplate(props: any) {
  const isDarkModeActive = useSelector((store: any) => store.isDarkModeActive);
  const { children } = props;
  return (
    <TodoTemplateBlock isDarkModeActive={isDarkModeActive}>
      {children}
    </TodoTemplateBlock>
  );
}

export default TodoTemplate;
