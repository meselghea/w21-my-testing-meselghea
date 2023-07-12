import { render, screen, fireEvent } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "../pages/pet/Home";
import { AppContext, } from "../Provider";

test("renders Home component correctly", () => {
  const contextValue = {
    pets: [], 
  fetchListPets: vi.fn(),
  savePet: vi.fn(),
  updatePet: vi.fn(),
  deletePet: vi.fn(),
  onFilterChange: vi.fn(),
    filteredPets: [
      { id: "1", ownerName: "John Doe", name: "Buddy", service: "Grooming", is_completed: false },
      { id: "2", ownerName: "Jane Smith", name: "Max", service: "Bathing", is_completed: true },
    ],
  };

  render(
    <Router>
      <AppContext.Provider value={contextValue}>
        <Home />
      </AppContext.Provider>
    </Router>
  );

  const titleElement = screen.getByText(/Welcome to/i);
  const searchInput = screen.getByPlaceholderText(/Search for Owner Name/i);

  expect(titleElement).toBeTruthy();
  expect(searchInput).toBeTruthy();
});

test("filters pets list based on input value", () => {
  const contextValue = {
    pets: [], 
  fetchListPets: vi.fn(),
  savePet: vi.fn(),
  updatePet: vi.fn(),
  deletePet: vi.fn(),
  onFilterChange: vi.fn(),
    filteredPets: [
      { id: "1", ownerName: "John Doe", name: "Buddy", service: "Grooming", is_completed: false },
      { id: "2", ownerName: "Jane Smith", name: "Max", service: "Bathing", is_completed: true },
    ],
};
  render(
    <Router>
      <AppContext.Provider value={contextValue}>
        <Home />
      </AppContext.Provider>
    </Router>
  );

  const searchInput = screen.getByPlaceholderText(/Search for Owner Name/i);
  fireEvent.change(searchInput, { target: { value: "John" } });

  expect(contextValue.onFilterChange).toHaveBeenCalledWith("John");
});

test("navigates to login page on admin button click", () => {
  const contextValue = {
    pets: [], 
    fetchListPets: vi.fn(),
    savePet: vi.fn(),
    updatePet: vi.fn(),
    deletePet: vi.fn(),
    onFilterChange: vi.fn(),
      filteredPets: [
        { id: "1", ownerName: "John Doe", name: "Buddy", service: "Grooming", is_completed: false },
        { id: "2", ownerName: "Jane Smith", name: "Max", service: "Bathing", is_completed: true },
      ],
  };
  render(
    <Router>
      <AppContext.Provider value={contextValue}>
        <Home />
      </AppContext.Provider>
    </Router>
  );

  const adminButton = screen.getByText(/Admin/i);
  adminButton.click();

});