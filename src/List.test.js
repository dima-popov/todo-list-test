import React from 'react';
import { render, screen } from '@testing-library/react';
import {ListForm} from './List'

describe('List', () => {
    test('renders List component', () => {
      render(<ListForm />);

      screen.debug();

    });
  });