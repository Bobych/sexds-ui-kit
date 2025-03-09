import * as React from "react";
import { Decorator } from "@storybook/react";

export const withTheme: Decorator = (Story, context) => {
    const theme = context.globals.background || 'light';

    if (theme === 'dark') {
        document.documentElement.setAttribute('theme', 'dark');
    } else {
        document.documentElement.setAttribute('theme', 'light');
    }

    return <Story />;
};