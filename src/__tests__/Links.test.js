import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Links from '../components/Links';

test('renders Links component with correct props', () => {
  const github = 'https://github.com/liza';
  const linkedin = 'https://www.linkedin.com/in/liza/';
  
  render(<Links github={github} linkedin={linkedin} />);
  
  expect(screen.getByText(github)).toBeInTheDocument();
  expect(screen.getByText(linkedin)).toBeInTheDocument();
});
