import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TextInput from './TextInput';

describe('TextInput component', () => {
  it('should render the component with the correct placeholder', () => {
    const placeholder = 'Enter your name';
    const { getByPlaceholderText } = render(<TextInput placeholder={placeholder} />);
    const inputElement = getByPlaceholderText(placeholder);
    expect(inputElement).toBeInTheDocument();
  });


  it('should trigger the onFocus and onBlur events when the input is focused and blurred', () => {
    const onFocus = jest.fn();
    const onBlur = jest.fn();
    const { getByRole } = render(<TextInput onFocus={onFocus} onBlur={onBlur} />);
    const inputElement = getByRole('textbox');
    fireEvent.focus(inputElement);
    expect(onFocus).toHaveBeenCalledTimes(1);
    fireEvent.blur(inputElement);
    expect(onBlur).toHaveBeenCalledTimes(1);
  });

  it('should disable the input when disabled prop is true', () => {
    const { getByRole } = render(<TextInput disabled />);
    const inputElement = getByRole('textbox');
    expect(inputElement).toBeDisabled();
  });
});
