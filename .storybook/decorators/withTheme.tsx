import * as React from "react";
import { Decorator } from "@storybook/react";

import {ThemeProvider} from "../../src/components/theme/ThemeProvider";


export const withTheme: Decorator = (Story, context) => {
    return (
        <ThemeProvider theme={context.globals.theme} >
            <Story {...context} />
        </ThemeProvider>
    );
};
