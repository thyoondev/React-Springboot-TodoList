import React from 'react';
import styled from 'styled-components';

const ItemContentDiv = styled.textarea`
  font-size: 18px;
  padding: 30px 10px;
  border: 0px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0);
  outline: none;
  width: 100%;
  height: 300px;
  overflow-y: auto;
  color: #868e96;
`;
const ItemContent = (props: any) => {
  const { content, onChange } = props;
  return (
    <ItemContentDiv
      value={content}
      className="content"
      name="content"
      onChange={onChange}
      placeholder="내용을 입력해 주세요."
    />
  );
};

export default ItemContent;
