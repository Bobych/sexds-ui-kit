import { action } from '@storybook/addon-actions';
import {Hand, HandEye} from "@phosphor-icons/react/dist/ssr";
import type { Meta, StoryObj } from "@storybook/react";

import {Button, Icon} from "components";
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
        disabled: {
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
        onMouseDown: action('onMouseDown'),
        onMouseUp: action('onMouseUp'),
        variant: "default",
        view: "default",
        size: "m",
        loading: false,
        disabled: false
    },
};

export const WithIcon: Story = {
    render: (args) => (
        <Button {...args}>
            <Icon icon={<HandEye />} />
            Text
            <Icon icon={<Hand />} />
        </Button>
    ),
};

export const ExtraLarge: Story = {
    args: {
        children: "Text",
        onClick: action('onClick'),
        onMouseEnter: action('onMouseEnter'),
        onMouseLeave: action('onMouseLeave'),
        onMouseDown: action('onMouseDown'),
        onMouseUp: action('onMouseUp'),
        variant: "default",
        view: "default",
        size: "xl",
        loading: false,
        disabled: false
    },
};

export const Accent: Story = {
    args: {
        children: "Text",
        onClick: action('onClick'),
        onMouseEnter: action('onMouseEnter'),
        onMouseLeave: action('onMouseLeave'),
        onMouseDown: action('onMouseDown'),
        onMouseUp: action('onMouseUp'),
        variant: "accent",
        view: "default",
        size: "m",
        loading: false,
        disabled: false
    },
};

export const Action: Story = {
    args: {
        children: "Text",
        onClick: action('onClick'),
        onMouseEnter: action('onMouseEnter'),
        onMouseLeave: action('onMouseLeave'),
        onMouseDown: action('onMouseDown'),
        onMouseUp: action('onMouseUp'),
        variant: "default",
        view: "default",
        size: "m",
        loading: false,
        disabled: false
    },
};

export const Loading: Story = {
    args: {
        children: "Text",
        onClick: action('onClick'),
        onMouseEnter: action('onMouseEnter'),
        onMouseLeave: action('onMouseLeave'),
        onMouseDown: action('onMouseDown'),
        onMouseUp: action('onMouseUp'),
        variant: "default",
        view: "default",
        size: "m",
        loading: true,
        disabled: false
    },
};

export const Disabled: Story = {
    args: {
        children: "Text",
        onClick: action('onClick'),
        onMouseEnter: action('onMouseEnter'),
        onMouseLeave: action('onMouseLeave'),
        onMouseDown: action('onMouseDown'),
        onMouseUp: action('onMouseUp'),
        variant: "default",
        view: "default",
        size: "m",
        loading: false,
        disabled: true
    },
};
