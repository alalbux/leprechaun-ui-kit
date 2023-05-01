import React from 'react';
import styled from '@emotion/styled';

interface TextInputProps {
  id?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const StyledInput = styled.input`
  font-family: inherit;
  font-size: 1rem;
  padding: 0.5rem 0.75rem;
  border: 1px solid #bdbdbd;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.2s ease-in-out;

  &:focus {
    border-color: #3f51b5;
  }

  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
  }
`;

const TextInput: React.FC<TextInputProps> = ({
  id,
  type = 'text',
  placeholder,
  value,
  disabled = false,
  onChange,
  onFocus,
  onBlur,
}) => {
  return (
    <StyledInput
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};

export default TextInput;
