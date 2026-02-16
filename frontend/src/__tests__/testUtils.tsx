import React from "react";
import { render, type RenderOptions } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MockedProvider } from "@apollo/client/testing/react";
import type { MockedResponse } from "@apollo/client/testing";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";

interface CustomRenderOptions extends Omit<RenderOptions, "wrapper"> {
  mocks?: MockedResponse[];
  initialEntries?: string[];
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    mocks = [],
    initialEntries = ["/"],
    ...renderOptions
  }: CustomRenderOptions = {}
) {
  function Wrapper({ children }: { children: React.ReactNode }) {
    return (
      <MockedProvider mocks={mocks}>
        <FluentProvider theme={webLightTheme}>
          <MemoryRouter initialEntries={initialEntries}>
            {children}
          </MemoryRouter>
        </FluentProvider>
      </MockedProvider>
    );
  }

  return render(ui, { wrapper: Wrapper, ...renderOptions });
}
