import React, { ChangeEvent } from 'react';
import styled from '@emotion/styled';

type OptionType = {
  value: string;
  label: string;
}

type SelectProps = {
  label: string;
  options: OptionType[];
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  id: string;
}

const SelectWrapper = styled.div`
  position: relative;
`;

const SelectComponent = styled.select`
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: #fff;
  appearance: none;
`;

const ArrowIcon = styled.span`
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  pointer-events: none;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 6px 4px 0 4px;
  border-color: #999 transparent transparent transparent;
`;

const Option = styled.option``;

const Select = ({ label, options, value, onChange, id }: SelectProps) => {
  return (
    <SelectWrapper>
      <label htmlFor={id}>{label}</label>
      <SelectComponent id={id} value={value} onChange={onChange}>
        {options.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </SelectComponent>
      <ArrowIcon />
    </SelectWrapper>
  );
};

export default Select;
