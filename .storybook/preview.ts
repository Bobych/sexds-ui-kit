import {Preview} from "@storybook/react";
import {MINIMAL_VIEWPORTS} from '@storybook/addon-viewport';

import {withTheme} from "./decorators/withTheme";
import '../styles/styles.scss';

const preview: Preview = {
  decorators: [withTheme],
  parameters: {
    jsx: { showFunctions: true },
    viewport: {
      viewports: MINIMAL_VIEWPORTS
    }
  },
  globalTypes: {
    theme: {
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'mirror',
        items: [
          {value: 'light', right: '☼', title: 'Light'},
          {value: 'dark', right: '☾', title: 'Dark'},
        ],
        dynamicTitle: true
      },
    },
  },
  tags: ['autodocs']
};

export default preview;
