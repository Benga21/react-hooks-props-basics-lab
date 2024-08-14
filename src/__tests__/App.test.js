import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from '../components/App';
import About from '../components/About';

test('renders Home and About components with correct props', () => {
  const user = {
    name: 'Liza',
    city: 'New York',
    bio: 'I made this!',
  };
  
  render(<App />);
  
  expect(screen.getByText(`${user.name} is a Web Developer from ${user.city}`)).toBeInTheDocument();
  
  if (user.bio) {
    expect(screen.getByText(user.bio)).toBeInTheDocument();
  }
});

