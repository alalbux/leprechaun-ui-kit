import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Radio from './Radio';

describe('Radio', () => {
    it('should render a radio button', () => {
      const { getByLabelText } = render(
        <Radio label="Option 1" isChecked={true} onChange={() => {}} />
      );
      const radioButton = getByLabelText('Option 1');
      expect(radioButton).toBeInTheDocument();
      expect(radioButton).toHaveAttribute('type', 'radio');
      expect(radioButton).toBeChecked();
    });
  
    it('should call the onChange function when clicked', () => {
      const onChangeMock = jest.fn();
      const { getByLabelText } = render(
        <Radio label="Option 1" isChecked={false} onChange={onChangeMock} />
      );
      const radioButton = getByLabelText('Option 1');
      fireEvent.click(radioButton);
      expect(onChangeMock).toHaveBeenCalledTimes(1);
      expect(onChangeMock).toHaveBeenCalledWith(true);
    });
  });
  