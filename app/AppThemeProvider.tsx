import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ReactNode } from "react";
import { lightTheme } from "@/lib/theme/lightTheme";

function AppThemeProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default AppThemeProvider;
