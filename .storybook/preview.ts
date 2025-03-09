import {Preview} from "@storybook/react";

import {withTheme} from "./decorators/withTheme";
import '../styles/styles.scss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      toolbar: {
        icon: 'circlehollow',
        items: ['light', 'dark'],
        title: 'Theme',
        dynamicTitle: true,
      },
    },
  },
  decorators: [withTheme],
  tags: ['autodocs']
};

export default preview;