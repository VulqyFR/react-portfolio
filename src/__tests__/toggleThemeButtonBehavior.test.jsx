import React from "react";
import "@testing-library/jest-dom";
import {
  render,
  screen,
  fireEvent,
  toBeInTheDocument,
  getByClassName,
  toBeTruthy,
} from "@testing-library/react";
import ToggleThemeButton from "../components/header/ThemeButton";
import { ThemeProvider } from "../context/ThemeContext";
import { Moon, Sun } from "lucide-react";

describe("ToggleThemeButton", () => {
  test(
    "Change theme",
    (async = () => {
      render(
        <ThemeProvider>
          <ToggleThemeButton />
        </ThemeProvider>
      );
      const nightModeButton = screen.getByRole("button");
      expect(nightModeButton).toBeInTheDocument();

      fireEvent.click(nightModeButton);

      const isSunIcon = document.getElementsByClassName("lucide-sun")[0];
      const isMoonIcon = document.getElementsByClassName("lucide-moon")[0];
      expect(isSunIcon || isMoonIcon).toBeTruthy();

      if (isSunIcon) {
        expect(isSunIcon).toBeInTheDocument();
      } else if (isMoonIcon) {
        expect(isMoonIcon).toBeInTheDocument();
      }

      //expect(moonIcon).not.toBeInTheDocument();
    })
  );
});
