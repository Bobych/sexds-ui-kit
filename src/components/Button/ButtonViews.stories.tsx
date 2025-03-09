import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { IconNames } from "../types/icon";
import {ButtonSizesNames, ButtonStatusesNames, ButtonVariantsNames, ButtonViewsNames} from "./constants.ts";

const meta: Meta<typeof Button> = {
    title: "SEXDS/Button/View",
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
        status: {
            control: "select",
            options: ButtonStatusesNames,
        },
        leftIcon: {
            control: "select",
            options: IconNames
        },
        rightIcon: {
            control: "select",
            options: IconNames
        },
        selected: {
            control: "boolean",
        },
        disabled: {
            control: "boolean",
        },
        loading: {
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
        variant: "default",
        view: "default",
        size: "m",
        status: "default",
        leftIcon: "HandEye",
        rightIcon: "Hand",
        disabled: false,
        loading: false,
        selected: false,
        href: "https://sportexclub.com",
        target: "_blank"
    },
};

export const Tone: Story = {
    args: {
        children: "Text",
        variant: "invert",
        view: "tone",
        size: "m",
        status: "default",
        leftIcon: "HandEye",
        rightIcon: "Hand",
        disabled: false,
        loading: false,
        selected: false,
        href: "https://sportexclub.com",
        target: "_blank"
    },
};

export const Outline: Story = {
    args: {
        children: "Text",
        variant: "accent",
        view: "outline",
        size: "m",
        status: "default",
        leftIcon: "HandEye",
        rightIcon: "Hand",
        disabled: false,
        loading: false,
        selected: false,
        href: "https://sportexclub.com",
        target: "_blank"
    },
};

export const Text: Story = {
    args: {
        children: "Text",
        variant: "success",
        view: "text",
        size: "m",
        status: "default",
        leftIcon: "HandEye",
        rightIcon: "Hand",
        disabled: false,
        loading: false,
        selected: false,
        href: "https://sportexclub.com",
        target: "_blank"
    },
};