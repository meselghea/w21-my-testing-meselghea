import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { vi } from 'vitest';
import Edit from '../pages/pet/Edit';
import { AppContext } from '../Provider';
import { server } from '../__mock__/Server';

const mockContextValue = {
  pets: [
    {
      id: '1',
      name: 'Fluffy',
      service: 'Grooming',
      ownerName: 'John Doe',
      is_completed: false,
    },
  ],
  updatePet: vi.fn(),
  filteredPets: [],
  fetchListPets: vi.fn(),
  savePet: vi.fn(),
  deletePet: vi.fn(),
  onFilterChange: vi.fn(),
};

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  vi.resetAllMocks();
});
afterAll(() => server.close());

test('renders Edit component correctly', async () => {
  const history = createMemoryHistory();
  const route = '/edit/1';
  history.push(route);

  render(
    <MemoryRouter initialEntries={[route]} initialIndex={0}>
      <AppContext.Provider value={mockContextValue}>
        <Routes>
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </AppContext.Provider>
    </MemoryRouter>
  );

  const nameInput = screen.getByPlaceholderText('Name');
  const serviceInput = screen.getByPlaceholderText('Service');
  const ownerNameInput = screen.getByPlaceholderText('Owner Name');
  const statusSelect = screen.getByRole('combobox');
  const updateButton = screen.getByRole('button', { name: 'Update Pet' });

  expect(nameInput.getAttribute('value')).toBe('Fluffy');
  expect(serviceInput.getAttribute('value')).toBe('Grooming');
  expect(ownerNameInput.getAttribute('value')).toBe('John Doe');
  expect(statusSelect.getAttribute('value')).toBeNull();

  fireEvent.change(nameInput, { target: { value: 'New Name' } });
  fireEvent.change(serviceInput, { target: { value: 'New Service' } });
  fireEvent.change(ownerNameInput, { target: { value: 'New Owner Name' } });
  fireEvent.change(statusSelect, { target: { value: 'true' } });

  expect(nameInput.getAttribute('value')).toBe('New Name');
  expect(serviceInput.getAttribute('value')).toBe('New Service');
  expect(ownerNameInput.getAttribute('value')).toBe('New Owner Name');
  expect(statusSelect.getAttribute('value')).toBeNull();

  fireEvent.click(updateButton);

  expect(mockContextValue.updatePet).toHaveBeenCalledWith({
    id: '1',
    name: 'New Name',
    service: 'New Service',
    ownerName: 'New Owner Name',
    is_completed: true,
  });
});