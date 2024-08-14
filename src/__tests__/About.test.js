import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../components/About';

test('renders bio and Links components correctly', () => {
  const bio = "I am a software developer who loves to build web applications.";
  const links = [
    { name: "GitHub", url: "https://github.com/yourusername" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/yourprofile" }
  ];

  render(<About bio={bio} links={links} />);

  // Check if the heading is rendered
  expect(screen.getByRole('heading', { name: /about me/i })).toBeInTheDocument();

  // Check if the image is rendered with the correct alt text
  expect(screen.getByRole('img', { name: /i made this/i })).toBeInTheDocument();

  // Check if the GitHub link is rendered
  expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument();

  // Check if the LinkedIn link is rendered
  expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument();
});
