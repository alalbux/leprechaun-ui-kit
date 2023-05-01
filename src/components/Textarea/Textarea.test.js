import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Textarea from './Textarea';

describe('Textarea', () => {
  it('should render the component with the correct label', () => {
    const label = 'Example Label';
    const id = 'example-id';
    const { getByLabelText } = render(<Textarea label={label} id={id} />);
    const labelElement = getByLabelText(label);
    expect(labelElement).toBeInTheDocument();
  });
});
