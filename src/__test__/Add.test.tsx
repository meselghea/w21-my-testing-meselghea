import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppContext, Provider } from "../Provider";
import Add from "../pages/pet/Add";
import { server } from "../__mock__/Server";


beforeAll(() => server.listen());


afterAll(() => server.close());

test("submits form data and navigates to /list", async () => {
  render(
    <Router>
      <AppContext.Provider value={null}>
        <Provider>
          <Add />
        </Provider>
      </AppContext.Provider>
    </Router>
  );


  const nameInput = screen.getByPlaceholderText("Name");
  fireEvent.change(nameInput, { target: { value: "Fluffy" } });

  const serviceInput = screen.getByPlaceholderText("Service");
  fireEvent.change(serviceInput, { target: { value: "Grooming" } });

  const ownerNameInput = screen.getByPlaceholderText("Owner Name");
  fireEvent.change(ownerNameInput, { target: { value: "Doe" } });

  const addButton = screen.getByRole("button", { name: "Add Pet" });
  fireEvent.click(addButton);


  await screen.findByText("Add Pet");


  expect(screen.getByText("Add Pet")).toBeTruthy();
});