"use server";

import React from 'react';

import { IconProps } from '@phosphor-icons/react';

import {block} from "../utils/block";
import {ButtonIconSides} from "./types";

interface IconComponentProps extends IconProps {
    data: React.ElementType;
    side: ButtonIconSides;
}

export const Icon = React.forwardRef<HTMLSpanElement, IconComponentProps> (
    ({
        data: IconComponent,
        weight = 'fill',
        side,
        ...restProps
    }, ref) => {
    const b = block('button');

    const className = b('icon', {
       side: side
    });

    return (
        <span className={className}>
            <IconComponent
                weight={weight}
                {...restProps}
            />
        </span>
    );
});
