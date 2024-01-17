import { render, screen } from "@testing-library/react";
import PasswordProtectedRoute from "./password-protected-route";
import React from "react";
import { NextIntlClientProvider } from "next-intl";
import { NextResponse } from "next/server";

describe("Password Protected Route Component", () => {
  beforeEach(() => {
    vitest.spyOn(global, "fetch");
  });

  afterEach(() => {
    vitest.resetAllMocks();
  });

  it("should show password prompt if password is wrong", async () => {
    vitest.spyOn(global, "fetch").mockResolvedValueOnce(new NextResponse(undefined, { status: 401 }));

    const messages = (await import(`./../../messages/en.json`)).default;
    render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <PasswordProtectedRoute>{<></>}</PasswordProtectedRoute>
      </NextIntlClientProvider>
    );

    const children = await screen.findByTestId("passwordPromptInput");
    expect(children).toBeVisible();
  });

  it("should show children if password is correct", async () => {
    vitest.spyOn(global, "fetch").mockResolvedValueOnce(new NextResponse(undefined, { status: 200 }));

    const messages = (await import(`./../../messages/en.json`)).default;
    render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <PasswordProtectedRoute>{<div data-testid="children"></div>}</PasswordProtectedRoute>
      </NextIntlClientProvider>
    );

    const children = await screen.findByTestId("children");
    expect(children).toBeVisible();
  });
});