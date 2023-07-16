import type { StorybookConfig } from "@storybook/nextjs";
import path from "path"

const config: StorybookConfig = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../public"],
  async webpackFinal(config, { configType }) {
    if (config?.resolve?.alias) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "@/components": path.resolve(__dirname, "../components"),
        "@/images": path.resolve(__dirname, "../images"),
        "@/lib": path.resolve(__dirname, "../lib"),
        "@/app": path.resolve(__dirname, "../app"),
        "@/messages": path.resolve(__dirname, "../messages"),
      }
    }
    return config
  },
};
export default config;
