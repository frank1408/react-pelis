import { render, screen } from '@testing-library/react';
import Peliculas from './Peliculas';

test('renders learn react link', () => {
  render(<Peliculas />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
