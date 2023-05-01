import React, { useState, ChangeEvent } from 'react';
import styled from '@emotion/styled';

type RadioProps = {
  label: string;
  isChecked: boolean;
  onChange: (newValue: boolean) => void;
}

const RadioWrapper = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const Input = styled.input`
  margin-right: 8px;
`;

const Radio = ({ label, isChecked, onChange }: RadioProps) => {
  const [checked, setChecked] = useState<boolean>(isChecked);

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue: boolean = event.target.checked;
    setChecked(newValue);
    onChange(newValue);
  };

  return (
    <RadioWrapper>
      <Input type="radio" checked={checked} onChange={handleRadioChange} />
      {label}
    </RadioWrapper>
  );
};

export default Radio;
