import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import List from "../pages/pet/List";
import Home from "../pages/pet/Home";
import Edit from "../pages/pet/Edit";
import Add from "../pages/pet/Add";
import PrivateLayout from '../pages/layouts/PrivateLayout';

describe("App", () => {
  test("renders Home component on the root path", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<PrivateLayout />}>
            <Route path="/list" element={<List />} />
            <Route path="/add" element={<Add />} />
            <Route path="/edit/:id" element={<Edit />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

  });

  test("renders Login component on the /login path", () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<PrivateLayout />}>
            <Route path="/list" element={<List />} />
            <Route path="/add" element={<Add />} />
            <Route path="/edit/:id" element={<Edit />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    const loginComponent = screen.getByText("Login Form");
    expect(loginComponent).toBeTruthy();
  });

  // Test other routes in a similar manner
});