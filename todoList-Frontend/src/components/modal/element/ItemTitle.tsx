import React from 'react';
import styled from 'styled-components';

const TitleDiv = styled.input`
  font-size: 32px;
  outline: none;
  border: none;
`;
const ItemTitle = (props: any) => {
  const { onChange, title } = props;
  return (
    <TitleDiv
      type="text"
      value={title}
      className="input title"
      name="title"
      onChange={onChange}
      placeholder="제목 없음"
      autoFocus
    />
  );
};

export default ItemTitle;
