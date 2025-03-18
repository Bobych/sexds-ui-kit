import {MapPin} from "@phosphor-icons/react";
import type { Meta, StoryObj } from "@storybook/react";

import {Label, Lable} from "components";
import {LabelSizesNames, LabelTypesNames} from "./constants";

const meta: Meta<typeof Label> = {
    title: "Components/Data Display/Label",
    component: Label,
    argTypes: {
        size: {
            control: "select",
            options: LabelSizesNames,
        },
        type: {
            control: "select",
            options: LabelTypesNames,
        },
        children: {
            control: "text",
        },
    },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
    args: {
        children: "Label",
        size: "s",
        type: "default"
    },
};

export const Active: Story = {
    args: {
        children: "Label",
        size: "s",
        type: "active"
    },
};

export const WithIcon: Story = {
    render: (args) => (
        <Label
            icon={<MapPin />}
            {...args}
        >
            Дом
        </Label>
    ),
};

export const Large: Story = {
    args: {
        children: "Label",
        size: "l",
        type: "default"
    },
};

export const WithLableString: Story = {
    render: (args) => (
        <Label
            icon={<MapPin />}
            lable='Свой'
            {...args}
        >
            Дом
        </Label>
    ),
};

export const WithLableComponent: Story = {
    render: (args) => (
        <Label
            icon={<MapPin />}
            lable={
                <Lable
                    type='announce'
                >
                    Свой
                </Lable>
            }
            {...args}
        >
            Дом
        </Label>
    ),
};
