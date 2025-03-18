import type { Meta, StoryObj } from "@storybook/react";

import {Lable} from "components";
import {LableSizesNames, LableTypesNames} from "./constants";
import {Hand, HandEye} from "@phosphor-icons/react/dist/ssr";

const meta: Meta<typeof Lable> = {
    title: "Components/Data Display/Lable",
    component: Lable,
    argTypes: {
        size: {
            control: "select",
            options: LableSizesNames,
        },
        type: {
            control: "select",
            options: LableTypesNames,
        },
        children: {
            control: "text",
        },
    },
};

export default meta;

type Story = StoryObj<typeof Lable>;

export const Default: Story = {
    args: {
        children: "Default",
        size: "s",
        type: "default"
    },
};

export const Misc: Story = {
    args: {
        children: "Misc",
        size: "s",
        type: "misc"
    },
};

export const Info: Story = {
    args: {
        children: "Info",
        size: "s",
        type: "info"
    },
};

export const Announce: Story = {
    args: {
        children: "Announce",
        size: "s",
        type: "announce"
    },
};

export const WithLeftIcon: Story = {
    render: (args) => (
        <Lable
            type='warning'
            leftIcon={<HandEye />}
            {...args}
        >
            Left icon
        </Lable>
    ),
};

export const WithRightIcon: Story = {
    render: (args) => (
        <Lable
            type='success'
            rightIcon={<Hand />}
            {...args}
        >
            Right icon
        </Lable>
    ),
};

export const WithBothIcons: Story = {
    render: (args) => (
        <Lable
            type='invert'
            leftIcon={<HandEye />}
            rightIcon={<Hand />}
            {...args}
        >
            Both icons
        </Lable>
    ),
};

export const ExtraLarge: Story = {
    args: {
        children: "Extra large",
        size: "xl",
        type: "danger"
    },
};
