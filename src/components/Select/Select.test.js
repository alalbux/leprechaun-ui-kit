import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Select from './Select';

const options = [
  { value: 'value1', label: 'Option 1' },
  { value: 'value2', label: 'Option 2' },
  { value: 'value3', label: 'Option 3' },
];

describe('Select component', () => {
  it('should render the label and options correctly', () => {
    const onChange = jest.fn();
    const value = 'value1';
    const id = 'test-id';
    render(<Select label="Select an option" options={options} value={value} onChange={onChange} id={id} />);

    const labelElement = screen.getByLabelText('Select an option');
    expect(labelElement).toBeInTheDocument();

    const optionElements = screen.getAllByRole('option');
    expect(optionElements).toHaveLength(options.length);

    options.forEach((option, index) => {
      expect(optionElements[index]).toHaveTextContent(option.label);
      expect(optionElements[index]).toHaveAttribute('value', option.value);
    });
  });

  it('should apply the ID to the select element', () => {
    const onChange = jest.fn();
    const value = 'value1';
    const id = 'test-id';
    render(<Select label="Select an option" options={options} value={value} onChange={onChange} id={id} />);

    const selectElement = screen.getByRole('combobox', { name: 'Select an option' });
    expect(selectElement).toHaveAttribute('id', id);
  });
});
