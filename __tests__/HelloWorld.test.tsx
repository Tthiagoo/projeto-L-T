import React from 'react';
import { render, screen } from '@testing-library/react';
import HelloWorld from '../components/HelloWorld';

test('renders HelloWorld component with the correct name', () => {
    render(<HelloWorld name="John" />);
    const headingElement = screen.getByText(/Hello, John!/i);
    expect(headingElement).toBeInTheDocument();
});
