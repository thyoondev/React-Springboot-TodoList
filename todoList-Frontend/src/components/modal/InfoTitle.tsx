import React from 'react';
import styled from 'styled-components';

const InfoTitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
`;

const InfoTitle = () => {
  return (
    <InfoTitleDiv>
      <div>
        <p className="infoTitle">📆 작성일시</p>
      </div>
      <div>
        <p className="infoTitle">🚦 상태</p>
      </div>
      <div>
        <p className="infoTitle">🚨 우선 순위</p>
      </div>
      <div>
        <p className="infoTitle">✍ 작성자</p>
      </div>
    </InfoTitleDiv>
  );
};

export default InfoTitle;
