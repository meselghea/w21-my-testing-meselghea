import { setupServer } from "msw/node";
import { handlers } from "./Handlers";

// Buat server palsu menggunakan penanganan yang ditentukan dalam handlers
export const server = setupServer(...handlers);