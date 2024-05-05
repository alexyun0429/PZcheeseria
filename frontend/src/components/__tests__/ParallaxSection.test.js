import React from "react";
import { render } from "@testing-library/react";
import ParallaxSection from "../ParallaxSection";

describe("ParallaxSection Component", () => {
  it("renders correctly with the given title and children", () => {
    const { getByText } = render(
      <ParallaxSection
        backgroundImage="/images/cheese-shop.jpeg"
        title="Welcome to PZ Cheeseria"
      >
        <p>Your one-stop destination for premium cheeses</p>
      </ParallaxSection>
    );

    expect(getByText("Welcome to PZ Cheeseria")).toBeInTheDocument();
    expect(
      getByText("Your one-stop destination for premium cheeses")
    ).toBeInTheDocument();
  });
});
