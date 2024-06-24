"use client";

import { ThemeProvider } from "next-themes";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider enableSystem={false} attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
  );
};

export default Providers;
