import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { renderWithProviders } from './utils';
import GalleryPage from '../gallery/GalleryPage';
import { artworks } from './data';

describe('Gallery Page', () => {

  test('Gallery Page with set number of Artworks', () => {
    const NUMBER_OF_ARTS = 6;
    renderWithProviders(<GalleryPage />, {
      preloadedState: {
        page: {
          entries: artworks.slice(0, NUMBER_OF_ARTS),
          hasMore: false,
          lastPage: 1,
        }
      }
    });
    const container = screen.getByTestId('gallery-container');
    expect(container.childElementCount).toBe(NUMBER_OF_ARTS);
  });

  test('Gallery Page with hasMore', () => {
    renderWithProviders(<GalleryPage />, {
      preloadedState: {
        page: {
          entries: artworks.slice(0, 9),
          hasMore: true,
          lastPage: 1,
        }
      }
    });

    expect(screen.getByText('Load More')).toBeInTheDocument();
  });

  test('Gallery Page without hasMore', () => {
    renderWithProviders(<GalleryPage />, {
      preloadedState: {
        page: {
          entries: artworks.slice(0, 9),
          hasMore: false,
          lastPage: 1,
        }
      }
    });

    expect(screen.queryByText('Load More')).not.toBeInTheDocument();
  });
});
