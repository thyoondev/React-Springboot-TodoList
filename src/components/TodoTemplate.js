//템플릿 컴포넌트

import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
  width: 1024px;
  height: 768px;
  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(0.5px);
  -webkit-backdrop-filter: blur(0.5px);
  border-radius: 30px;

  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */

  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 480px;
    height: 850px;
  }
`;

function TodoTemplate(props) {
  const { children } = props;
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;
