import { vi, expect } from "vitest";
import { useMatches } from "@remix-run/react";
import { safeRedirect, DEFAULT_REDIRECT, validateEmail } from "./utils";

vi.mock("@remix-run/react", () => ({
  useMatches: vi.fn(),
}));

it("safeRedirect", () => {
  const mockUseMatches = vi.fn(useMatches);

  it("should return default redirect if 'to' is null or undefined", () => {
    mockUseMatches.mockReturnValue([]);

    const result = safeRedirect(null as any);
    expect(result).toEqual(DEFAULT_REDIRECT);

    const result2 = safeRedirect(undefined as any);
    expect(result2).toEqual(DEFAULT_REDIRECT);
  });

  it("should return default redirect if 'to' is not a string", () => {
    mockUseMatches.mockReturnValue([]);

    const result = safeRedirect(123 as any);
    expect(result).toEqual(DEFAULT_REDIRECT);

    const result2 = safeRedirect(true as any);
    expect(result2).toEqual(DEFAULT_REDIRECT);

    const result3 = safeRedirect({ key: "value" } as any);
    expect(result3).toEqual(DEFAULT_REDIRECT);
  });

  it("should return default redirect if 'to' is unsafe", () => {
    mockUseMatches.mockReturnValue([]);

    const result = safeRedirect("http://example.com");
    expect(result).toEqual(DEFAULT_REDIRECT);

    const result2 = safeRedirect("//example.com");
    expect(result2).toEqual(DEFAULT_REDIRECT);

    const result3 = safeRedirect("../dashboard");
    expect(result3).toEqual(DEFAULT_REDIRECT);
  });

  it("should return 'to' if it is a safe redirect", () => {
    mockUseMatches.mockReturnValue([]);

    const result = safeRedirect("/dashboard");
    expect(result).toEqual("/dashboard");

    const result2 = safeRedirect("/posts");
    expect(result2).toEqual("/posts");
  });

  it("should return default redirect if 'to' is empty string", () => {
    mockUseMatches.mockReturnValue([]);

    const result = safeRedirect("");
    expect(result).toEqual(DEFAULT_REDIRECT);
  });
});

test("validateEmail returns true for emails", () => {
  expect(validateEmail("kody@example.com")).toBe(true);
});