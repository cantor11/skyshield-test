// src/__tests__/Lights.test.jsx
import React from "react";
import { render } from "@testing-library/react";
import Lights from "../pages/capa-ozono/lights/Lights";

describe("Lights component", () => {
  it("renders without crashing", () => {
    const { container } = render(<Lights />);
    expect(container).toBeTruthy(); // Verifica que se renderiza sin errores
  });
});

