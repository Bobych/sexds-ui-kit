import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";
import { IconNames } from "../types/icon";
import {ButtonSizesNames, ButtonVariantsNames, ButtonViewsNames} from "./constants";

const meta: Meta<typeof Button> = {
    title: "Components/Inputs/Button",
    component: Button,
    argTypes: {
        variant: {
            control: "select",
            options: ButtonVariantsNames,
        },
        view: {
            control: "select",
            options: ButtonViewsNames,
        },
        size: {
            control: "select",
            options: ButtonSizesNames,
        },
        leftIcon: {
            control: "select",
            options: IconNames
        },
        rightIcon: {
            control: "select",
            options: IconNames
        },
        disabled: {
            control: "boolean",
        },
        action: {
            control: "boolean",
        },
        children: {
            control: "text",
        },
        href: {
            control: 'text',
        },
        target: {
            control: 'select',
            options: ['_blank', '_self', '_parent', '_top'],
        },
    },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        children: "Text",
        onClick: action('onClick'),
        onMouseEnter: action('onMouseEnter'),
        onMouseLeave: action('onMouseLeave'),
        variant: "default",
        view: "default",
        size: "m",
        leftIcon: "HandEye",
        rightIcon: "Hand",
        action: false,
        selected: false,
        disabled: false
    },
};

export const ExtraLarge: Story = {
    args: {
        children: "Text",
        onClick: action('onClick'),
        onMouseEnter: action('onMouseEnter'),
        onMouseLeave: action('onMouseLeave'),
        variant: "default",
        view: "default",
        size: "xl",
        leftIcon: "HandEye",
        rightIcon: "Hand",
        action: false,
        selected: false,
        disabled: false
    },
};

export const Accent: Story = {
    args: {
        children: "Text",
        onClick: action('onClick'),
        onMouseEnter: action('onMouseEnter'),
        onMouseLeave: action('onMouseLeave'),
        variant: "accent",
        view: "default",
        size: "m",
        leftIcon: "HandEye",
        rightIcon: "Hand",
        action: false,
        selected: false,
        disabled: false
    },
};

export const Action: Story = {
    args: {
        children: "Text",
        onClick: action('onClick'),
        onMouseEnter: action('onMouseEnter'),
        onMouseLeave: action('onMouseLeave'),
        variant: "default",
        view: "default",
        size: "m",
        leftIcon: "HandEye",
        rightIcon: "Hand",
        action: true,
        selected: false,
        disabled: false
    },
};

export const Selected: Story = {
    args: {
        children: "Text",
        onClick: action('onClick'),
        onMouseEnter: action('onMouseEnter'),
        onMouseLeave: action('onMouseLeave'),
        variant: "default",
        view: "default",
        size: "m",
        leftIcon: "HandEye",
        rightIcon: "Hand",
        action: false,
        selected: true,
        disabled: false
    },
};

export const Disabled: Story = {
    args: {
        children: "Text",
        onClick: action('onClick'),
        onMouseEnter: action('onMouseEnter'),
        onMouseLeave: action('onMouseLeave'),
        variant: "default",
        view: "default",
        size: "m",
        leftIcon: "HandEye",
        rightIcon: "Hand",
        action: false,
        selected: false,
        disabled: true
    },
};
