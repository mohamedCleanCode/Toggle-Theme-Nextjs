import { ThemeProvider as NextThemeProvider } from "next-themes";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: IProps) => {
  return <NextThemeProvider>{children}</NextThemeProvider>;
};

export default ThemeProvider;
