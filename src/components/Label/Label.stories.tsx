import {Question} from "@phosphor-icons/react";
import type { Meta, StoryObj } from "@storybook/react";

import {Label, Icon} from "components";
import {LabelSizesNames} from "./constants";


const meta: Meta<typeof Label> = {
    title: "Components/Data Display/Label",
    component: Label,
    argTypes: {
        size: {
            control: "select",
            options: LabelSizesNames,
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
        size: "m",
    },
};

export const WithIcon: Story = {
    render: (args) => (
        <Label {...args}>
            <Icon data={Question} />
            Label
        </Label>
    ),
};

export const ExtraLarge: Story = {
    args: {
        children: "Label",
        size: "xl",
    },
};