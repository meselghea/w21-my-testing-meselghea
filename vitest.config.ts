import { defineConfig } from "vitest/config";
export default defineConfig({
test: {
environment: "happy-dom",
globals: true,
include: ['src/__test__/*.test.tsx'],
exclude: ['e2e/Gaepets.spec.ts']
},
});