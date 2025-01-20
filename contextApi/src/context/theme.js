import { createContext, useContext } from "react";

export const ThemeContax = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});
