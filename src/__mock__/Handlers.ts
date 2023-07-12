import { rest } from "msw";

export const handlers = [
  rest.get("https://64263f33d24d7e0de46c68c3.mockapi.io/pets", (_req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: "1",
          name: "Fluffy",
          service: "Grooming",
          ownerName: "Doe",
          is_completed: false,
        },
        {
          id: "2",
          name: "Max",
          service: "Bathing",
          ownerName: "Smith",
          is_completed: true,
        },
      ])
    );
  }),

  rest.post("https://64263f33d24d7e0de46c68c3.mockapi.io/pets", (req, res, ctx) => {
    const { name, service, ownerName } = req.body as {
      name: string;
      service: string;
      ownerName: string;
    };
    const newPet = {
      id: "3",
      name,
      service,
      ownerName,
      is_completed: false,
    };

    return res(
      ctx.json(newPet)
    );
  }),

  rest.put("https://64263f33d24d7e0de46c68c3.mockapi.io/pets/:id", (req, res, ctx) => {
    const { id } = req.params;
    const { name, service, ownerName, is_completed } = req.body as {
      name: string;
      service: string;
      ownerName: string;
      is_completed: boolean;
    };

    const updatedPet = {
      id,
      name,
      service,
      ownerName,
      is_completed,
    };

    return res(
      ctx.json(updatedPet)
    );
  }),

  rest.delete("https://64263f33d24d7e0de46c68c3.mockapi.io/pets/:id", (req, res, ctx) => {
    const { id } = req.params;

    return res(
      ctx.json({ message: `Deleted pet with id ${id}` })
    );
  }),
];