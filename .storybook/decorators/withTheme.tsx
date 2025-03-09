import * as React from "react";
import { Decorator } from "@storybook/react";

export const withTheme: Decorator = (Story, context) => {
    const background = context.globals.backgrounds?.value;
    const isDark = background === "#383838";

    document.documentElement.setAttribute("theme", isDark ? "dark" : "light");

    return <Story />;
};
