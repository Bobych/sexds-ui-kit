"use server";

import React from 'react';
import {IconProps} from "@phosphor-icons/react";

import './Icon.scss';

interface IconComponentProps extends IconProps {
    data: React.ElementType;
}

export const Icon = React.forwardRef<HTMLSpanElement, IconComponentProps>(
    ({
        data: IconComponent,
        weight = 'fill',
        ...rest
     }, ref) => {

        return (
            <span className='icon' ref={ref}>
                <IconComponent
                    weight={weight}
                    {...rest}
                />
            </span>
        );
    }
);