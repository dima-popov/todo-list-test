import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'
import {App} from './App'

describe('List', () => {
    test('renders List component', () => {
      render(<App />);
   //   screen.debug();
      expect(screen.getByText('TodoList')).toBeInTheDocument();
   
    });

    test('Add List item click', () => {
      render(<App />);
      var input = screen.getByLabelText('new task');
      fireEvent.change(input, {target: {value: 'test item text1'}});
      fireEvent.click(screen.getByText('ADD'));
   //   screen.debug();
      expect(screen.getByText('test item text1')).toBeInTheDocument();
    });

    test('Add List item key', () => {
      render(<App />);
      var input = screen.getByLabelText('new task');
      fireEvent.change(input, {target: {value: 'test item text2'}});
      fireEvent.keyDown(input, {keyCode: 13});
    //  screen.debug();
      expect(screen.getByText('test item text2')).toBeInTheDocument();
    });

    test('delete button', () => {
      render(<App />);
      window.confirm = jest.fn(() => true);
      var deleteButton = screen.getAllByLabelText('delete');
      deleteButton.forEach(function(elm){
        fireEvent.click(elm);
      })
   //   screen.debug();
      expect(screen.queryByLabelText('delete')).not.toBeInTheDocument();
      
    });

    test('delete button', () => {
      const { container } = render(<App />);

      var input = screen.getByLabelText('new task');
      fireEvent.change(input, {target: {value: 'test item text3'}});
      fireEvent.keyDown(input, {keyCode: 13});

      var checkButton = screen.getByTestId('check').querySelector('input');
      fireEvent.click(checkButton);

      const sTag = container.querySelector('s');

      screen.debug();
      
      expect(sTag).toBeInTheDocument();
     
    });
    

  });