import { render, screen } from '@testing-library/react'; // Import necessary functions from testing library
import App from './App'; // Import the main App component

test('renders learn react link', () => {
  render(<App />); // Render the App component
  const linkElement = screen.getByText(/learn react/i); // Find the element with text 'learn react'
  expect(linkElement).toBeInTheDocument(); // Expect the element to be in the document
});
