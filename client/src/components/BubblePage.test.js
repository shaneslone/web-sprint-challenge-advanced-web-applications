import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import BubblePage from './BubblePage';

import { fetchColors as mockFetchColors } from '../api/fetchColors';
jest.mock('../api/fetchColors');

test('Fetches data and renders the bubbles', async () => {
  // Finish this test
  render(<BubblePage />);
  mockFetchColors.mockResolvedValueOnce({
    data: [
      {
        color: 'aquamarine',
        code: { hex: '#7fffd4' },
        id: 0,
      },
      {
        color: 'blue',
        code: { hex: '#6093ca' },
        id: 1,
      },
    ],
  });

  await waitFor(() => {
    console.log(mockFetchColors);
    const colors = screen.getAllByTestId('color');
    expect(colors).toHaveLength(2);
  });
});
