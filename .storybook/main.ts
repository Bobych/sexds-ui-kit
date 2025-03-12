import type { StorybookConfig } from "@storybook/react-vite";


const config: StorybookConfig = {
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(ts|tsx)"],
  addons: [
    {
      name: "@storybook/addon-essentials",
      options: {
        backgrounds: false
      }
    },
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@chromatic-com/storybook",
    "./theme-addon/register.tsx"
  ],
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript'
  }
};

export default config;
