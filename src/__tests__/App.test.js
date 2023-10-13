import { render, screen } from '@testing-library/react';
import App from '../components/App.js';

test('renders learn react link', () => {
  render(<App />);
  const headingElement = screen.getByText(/Surreal Estate/i);
  expect(headingElement).toBeInTheDocument();
});
