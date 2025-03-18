import React from 'react';
import {Icon} from 'components';
import {LableSizes, LableTypes} from './types';

import {block} from 'utils/block';

import './Lable.scss';

const b = block('lable');

export interface LableProps
    extends React.LabelHTMLAttributes<HTMLLabelElement> {
    type?: LableTypes;
    size?: LableSizes;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    children?: React.ReactNode;
    extraProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
}

export const Lable = React.forwardRef(function Lable(
        props: LableProps,
        ref: React.Ref<HTMLLabelElement>
    ) {
        checkProps(props);

        const {
            type = 'default',
            size = 's',
            leftIcon,
            rightIcon,
            children,
            extraProps,
            ...rest
        } = props;

        const commonProps = {
            className: b(
                {
                    type: type,
                    size: size
                },
                rest.className
            )
        }

        return (
            <label
                {...(rest as Pick<typeof props, keyof typeof rest>)}
                {...(extraProps as (typeof props)['extraProps'])}
                {...commonProps}
                ref={ref as React.Ref<HTMLLabelElement>}
            >
                {leftIcon && <Icon icon={leftIcon} />}
                {children}
                {rightIcon && <Icon icon={rightIcon} />}
            </label>
        );
    }
)

function checkProps({children}: LableProps) {
    if (typeof children !== 'string') {
        console.warn('Use element of type "string" as children in component.');
    }
}
