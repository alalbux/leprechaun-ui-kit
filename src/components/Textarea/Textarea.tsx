import React from 'react';
import styled from '@emotion/styled';

const TextareaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const TextareaLabel = styled.label`
  margin-bottom: 8px;
`;

const TextareaInput = styled.textarea`
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: #fff;
  resize: vertical;
  min-height: 100px;
`;

const TextareaComponent = ({ label, value, onChange }) => {
  return (
    <TextareaWrapper>
      <TextareaLabel>{label}</TextareaLabel>
      <TextareaInput value={value} onChange={onChange} />
    </TextareaWrapper>
  );
};

export default TextareaComponent;
