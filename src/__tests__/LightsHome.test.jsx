import React from "react";
import { render } from "@testing-library/react";
import Lights from "../pages/home/lights/Lights";

describe("Lights component", () => {
  it("renders without crashing", () => {
    const { container } = render(<Lights />);
    expect(container).toBeTruthy(); // Verifica que se renderiza sin errores
  });
});