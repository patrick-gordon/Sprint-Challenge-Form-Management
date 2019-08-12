import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent } from '@testing-library/react';

describe("App", () => {

  it('renders without crashing', () => {
    render(<App />)
  });
})
