import React from "react";
import type { Preview } from "@storybook/react";
import "../app/globals.css";
import AppThemeProvider from "../app/AppThemeProvider"; // Your local styles
const inter = Inter({ subsets: ["latin"] });
import { Inter } from "next/font/google";

const preview: Preview = {
  decorators: [
    (Story) => (
      <AppThemeProvider>
        <main className={inter.className}>
          <Story />
        </main>
      </AppThemeProvider>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
