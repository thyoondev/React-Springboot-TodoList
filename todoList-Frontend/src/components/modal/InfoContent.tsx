import React from 'react';
import styled from 'styled-components';

const InfoContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SelectBox = styled.select`
  width: 100%;
  color: #868e96;
  font-size: 16px;
  padding: 8px 5px;
  border: 0px;
  outline: none;
  background: url('../../image/arrow.jpg') no-repeat 95% 50%;
  border-radius: 10px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;

const InputBox = styled.input`
  background: rgba(255, 255, 255, 0);
  width: 100%;
  height: 30px;
  border: 0px;
  outline: none;
  border-radius: 10px;
  padding: 5px;
  color: #868e96;
  font-size: 16px;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;
const InfoContent = (props: any) => {
  const { onChange, createdDate, process, priority, author } = props;
  return (
    <InfoContentDiv>
      <div>
        <InputBox type="text" value={createdDate} readOnly />
      </div>
      <div>
        <SelectBox name="process" value={process} onChange={onChange}>
          <option value="0">진행 전</option>
          <option value="1">진행 중</option>
          <option value="2">완료 🙌</option>
        </SelectBox>
      </div>
      <div>
        <SelectBox name="priority" value={priority} onChange={onChange}>
          <option value="0">우선순위 0 🔥</option>
          <option value="1">우선순위 1</option>
          <option value="2">우선순위 2</option>
          <option value="3">우선순위 3</option>
          <option value="4">우선순위 4</option>
          <option value="5">우선순위 5</option>
        </SelectBox>
      </div>
      <div>
        <InputBox
          type="text"
          name="author"
          value={author}
          onChange={onChange}
          placeholder="작성자를 입력해 주세요."
        />
      </div>
    </InfoContentDiv>
  );
};

export default InfoContent;
