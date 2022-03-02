import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'
import {App} from './App'

describe('List', () => {
    test('renders List component', () => {
      render(<App />);
      screen.debug();
      expect(screen.getByText('TodoList')).toBeInTheDocument();
   
    });

    test('Add List item', () => {
      render(<App />);
      var input = screen.getByLabelText('new task');
      fireEvent.change(input, {target: {value: 'test item text'}});
      fireEvent.keyDown(screen.getByLabelText('new task'), {key: 'Enter', code: 'Enter', charCode: 13});
      fireEvent.click(screen.getByText('ADD'));
      screen.debug();
      expect(screen.getByText('test item text')).toBeInTheDocument();
    });

  });