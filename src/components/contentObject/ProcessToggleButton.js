import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import { toggleProcess } from "../../store";

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

const ProcessToggleButton = (props) => {
  const { todo } = props;
  const [processToggle, setProcessToggle] = useState(false);
  const dispatch = useDispatch();
  //프로세스 진행 상태 변경
  const onToggleProcess = (value) => dispatch(toggleProcess(todo.id, value));

  return (
    <div onClick={() => setProcessToggle(!processToggle)}>
      {processToggle ? (
        <ChangeProcessState>
          <ProcessStateCircle
            process={0}
            onClick={() => onToggleProcess(0)}
            title="진행 전"
          ></ProcessStateCircle>
          <ProcessStateCircle
            process={1}
            onClick={() => onToggleProcess(1)}
            title="진행 중"
          ></ProcessStateCircle>
          <ProcessStateCircle
            process={2}
            onClick={() => onToggleProcess(2)}
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
  );
};

export default ProcessToggleButton;
