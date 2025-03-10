import {Preview} from "@storybook/react";

import {withTheme} from "./decorators/withTheme";
import '../styles/styles.scss';

const preview: Preview = {
  parameters: {
    backgrounds: {
      values: [
        { name: 'Light', value: '#ececec' },
        { name: 'Dark', value: '#383838' }
      ],
      default: 'light'
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes: {
    theme: {
      defaultValue: 'light',
      toolbar: {
        title: 'Theme [TODO]',
        icon: 'mirror',
        items: [
          {value: 'light', right: '☼', title: 'Light'},
          {value: 'dark', right: '☾', title: 'Dark'},
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [withTheme],
  tags: ['autodocs']
};

export default preview;