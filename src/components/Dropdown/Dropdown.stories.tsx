import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import {Diamond, QrCode} from "@phosphor-icons/react/dist/ssr";
import { Dropdown, DropdownProps } from './Dropdown';
import { TitleProps } from './Title';
import { BlockProps } from './Block';

export default {
    title: 'Components/Data Display/Dropdown',
    component: Dropdown,
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['s', 'm', 'l'],
        },
    },
} as Meta<typeof Dropdown>;

const Template: StoryFn<DropdownProps> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
    size: 's',
    elements: [
        {
            title: {
                title: 'Title',
                subtitle: 'Subtitle',
            } as TitleProps,
            blocks: [
                {
                    type: 'accent',
                    text: 'Text', subtext: 'Subtext',
                    textIcon: <Diamond />, subtextIcon: <QrCode />,
                } as BlockProps,
                {
                    text: 'Text', subtext: 'Subtext',
                    textIcon: <Diamond />, subtextIcon: <QrCode />,
                } as BlockProps,
                {
                    type: 'danger',
                    text: 'Text', subtext: 'Subtext',
                    textIcon: <Diamond />, subtextIcon: <QrCode />,
                } as BlockProps
            ],
        },
        {
            title: {
                title: 'Title',
            } as TitleProps,
            blocks: [
                {
                    text: 'Text', subtext: 'Subtext',
                    textIcon: <Diamond />, subtextIcon: <QrCode />,
                } as BlockProps,
                {
                    text: 'Text', subtext: 'Subtext',
                    textIcon: <Diamond />, subtextIcon: <QrCode />,
                } as BlockProps
            ],
        },
    ],
};

export const MediumSize = Template.bind({});
MediumSize.args = {
    ...Default.args,
    size: 'm',
};

export const LargeSize = Template.bind({});
LargeSize.args = {
    ...Default.args,
    size: 'l'
};

export const WithoutSubtext = Template.bind({});
WithoutSubtext.args = {
    size: 'm',
    elements: [
        {
            title: {
                title: 'Title',
            } as TitleProps,
            blocks: [
                { text: 'Text' } as BlockProps,
                { text: 'Text', textIcon: <Diamond weight='duotone' /> } as BlockProps,
            ],
        },
    ],
};
