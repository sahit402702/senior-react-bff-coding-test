import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "./testUtils";
import { Layout } from "../components/Layout";

describe("Layout", () => {
  it("renders the title", () => {
    renderWithProviders(
      <Layout sidebar={<div>Sidebar</div>} title="Test Title">
        <div>Content</div>
      </Layout>
    );
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  it("renders sidebar content", () => {
    renderWithProviders(
      <Layout sidebar={<div>My Sidebar</div>} title="Title">
        <div>Content</div>
      </Layout>
    );
    expect(screen.getByText("My Sidebar")).toBeInTheDocument();
  });

  it("renders children content", () => {
    renderWithProviders(
      <Layout sidebar={<div>Sidebar</div>} title="Title">
        <div>Main Content</div>
      </Layout>
    );
    expect(screen.getByText("Main Content")).toBeInTheDocument();
  });
});
