import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppContext,  } from '../Provider';
import { expect, test, vi } from 'vitest';
import List from '../pages/pet/List';

const mockContextValue = {
    pets: [], 
  fetchListPets: vi.fn(),
  savePet: vi.fn(),
  updatePet: vi.fn(),
  deletePet: vi.fn(),
  onFilterChange: vi.fn(),
    filteredPets: [
    { id: '80', ownerName: 'Doe', name: 'Fluffy', service: 'Grooming', is_completed: false },
    { id: '89', ownerName: 'Smith', name: 'Max', service: 'Bathing', is_completed: true },
  ],
};

test('renders List component correctly', () => {
  render(
    <Router>
      <AppContext.Provider value={mockContextValue}>
        <List />
      </AppContext.Provider>
    </Router>
  );

  const petItems = screen.getAllByRole('row');
  expect(petItems).toHaveLength(2); 
  
});

test('handles filter input change correctly', () => {
  render(
    <Router>
      <AppContext.Provider value={mockContextValue}>
        <List />
      </AppContext.Provider>
    </Router>
  );

  // Simulate input change event
  const filterInput = screen.getByPlaceholderText('Search for Owner Name...');
  fireEvent.change(filterInput, { target: { value: 'Doe' } });

  // Assertion example: Verify that the filter text is updated correctly
  expect(mockContextValue.onFilterChange).toHaveBeenCalledWith('Doe');
});

test('handles delete button click correctly', () => {
  render(
    <Router>
      <AppContext.Provider value={mockContextValue}>
        <List />
      </AppContext.Provider>
    </Router>
  );

  const deleteButtons = screen.getAllByRole('button');
  fireEvent.click(deleteButtons[0]);
});