import React from 'react';
import {Icon} from 'components';
import {LabelSizes, LabelTypes} from './types';

import {block} from 'utils/block';

import './Label.scss';

const b = block('label');

interface LabelProps
    extends React.LabelHTMLAttributes<HTMLLabelElement> {
    type?: LabelTypes;
    size?: LabelSizes;
    icon?: React.ReactNode;
    children?: React.ReactNode;
    extraProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
}

export const Label = React.forwardRef(function Label(
        props: LabelProps,
        ref: React.Ref<HTMLLabelElement>
    ) {
        checkProps(props);

        const {
            type = 'active',
            size = 's',
            icon,
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
                {icon && <Icon icon={icon} />}
                {children}
            </label>
        );
    }
)

function checkProps({children}: LabelProps) {
    if (typeof children !== 'string') {
        console.warn('Use element of type "string" as children in component.');
    }
}
