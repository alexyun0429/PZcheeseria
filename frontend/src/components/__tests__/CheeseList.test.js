import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import CheeseList from "../CheeseList";

jest.mock("axios");

const cheeses = [
  {
    id: 1,
    name: "Camembert",
    pricePerKilo: 20,
    imageUrl: "camembert.jpeg",
  },
  {
    id: 2,
    name: "Gouda",
    pricePerKilo: 25,
    imageUrl: "gouda.jpeg",
  },
];

describe("CheeseList Component", () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({ data: cheeses });
  });

  it("renders the list of cheeses correctly", async () => {
    render(<CheeseList />);
    await waitFor(() => {
      expect(screen.getByText("Camembert")).toBeInTheDocument();
      expect(screen.getByText("Gouda")).toBeInTheDocument();
    });
  });

  it("renders the cheese prices correctly", async () => {
    render(<CheeseList />);
    await waitFor(() => {
      expect(screen.getByText("$20")).toBeInTheDocument();
      expect(screen.getByText("$25")).toBeInTheDocument();
    });
  });
});
