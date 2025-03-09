import * as React from 'react';
import { Decorator } from "@storybook/react";

export const withCenter: Decorator = (Story) => (
    <div
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh", // На всю высоту экрана
        }}
    >
        <Story />
    </div>
);