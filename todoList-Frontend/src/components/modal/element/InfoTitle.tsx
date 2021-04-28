import React from 'react';
import styled from 'styled-components';

const InfoTitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
`;

const InfoTitleas = styled.div`
  margin: 8px 0px;
`;

const infoTitleLabel = [
  { label: '📆 작성일시' },
  { label: '🚦 상태' },
  { label: '🚨 우선 순위' },
  { label: '✍ 작성자' },
];

const InfoTitle = () => {
  return (
    <InfoTitleDiv>
      {infoTitleLabel.map((item, index) => (
        <InfoTitleas key={index}>{item.label}</InfoTitleas>
      ))}
    </InfoTitleDiv>
  );
};

export default InfoTitle;
