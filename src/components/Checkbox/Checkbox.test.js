import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Checkbox from './Checkbox';

describe('Checkbox', () => {
  it('should render label and checkbox', () => {
    const { getByLabelText, getByText } = render(
      <Checkbox label="Test Checkbox" isChecked={false} onChange={() => {}} />
    );
    const labelElement = getByText('Test Checkbox');
    const checkboxElement = getByLabelText('Test Checkbox');

    expect(labelElement).toBeInTheDocument();
    expect(checkboxElement).toBeInTheDocument();
  });

  it('should call onChange with correct value when checkbox is clicked', () => {
    const onChangeMock = jest.fn();
    const { getByLabelText } = render(
      <Checkbox label="Test Checkbox" isChecked={false} onChange={onChangeMock} />
    );
    const checkboxElement = getByLabelText('Test Checkbox');

    fireEvent.click(checkboxElement);

    expect(onChangeMock).toHaveBeenCalledWith(true);
  });
});
