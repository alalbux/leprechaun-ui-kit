import React, { useState, ChangeEvent } from 'react';
import styled from '@emotion/styled';

type CheckboxProps = {
  label: string;
  isChecked: boolean;
  onChange: (newValue: boolean) => void;
}

const Label = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const Input = styled.input`
  margin-right: 8px;
`;

const Checkbox = ({ label, isChecked, onChange }: CheckboxProps) => {
  const [checked, setChecked] = useState<boolean>(isChecked);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue: boolean = event.target.checked;
    setChecked(newValue);
    onChange(newValue);
  };

  return (
    <Label>
      <Input
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
      />
      {label}
    </Label>
  );
};

export default Checkbox;
