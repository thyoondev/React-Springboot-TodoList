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
  { label: 'π μμ±μΌμ' },
  { label: 'π¦ μν' },
  { label: 'π¨ μ°μ  μμ' },
  { label: 'β μμ±μ' },
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
