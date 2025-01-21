import { createContext, useContext } from "react";

export const ThemeContax = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});
export const ThemeProvider = ThemeContax.Provider;

export default function useTheme() {
  return useContext(ThemeContax);
}
