import { render, screen } from '@testing-library/react';
import App from '../App';
import { describe, expect, it } from 'vitest';

describe('App', () => {
  it('renders ', () => {
    render(<App />);
    const headline = screen.getByText(/Feito com ♥ por DevGentil para DTI/i);
    expect(headline).toBeInTheDocument();
  });

  it('renders theme toggle button', () => {
    render(<App />);
    const themeButton = screen.getByTestId('theme-toggle-button');
    expect(themeButton).toBeInTheDocument();
  });
});
