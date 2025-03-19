import React from 'react';
import {Icon, Lable, LableProps} from 'components';
import {LabelSizes, LabelTypes} from './types';

import {block} from 'utils/block';

import './Label.scss';

const b = block('label');

export interface LabelProps
    extends React.LabelHTMLAttributes<HTMLLabelElement> {
    type?: LabelTypes;
    size?: LabelSizes;
    icon?: React.ReactNode;
    lable?: React.ReactNode;
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
            lable,
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
                {
                    React.isValidElement<LableProps>(lable)
                        ? (lable)
                        : typeof lable === 'string'
                            ? (<Lable>{lable}</Lable>)
                            : null
                }
            </label>
        );
    }
)

function checkProps({children, lable}: LabelProps) {
    if (typeof children !== 'string') {
        console.warn('Use element of type "string" as children in component.');
    }

    if (typeof lable === 'string') {
        console.info('ℹ️ You can customize your lable, forwarding <Lable> component to lable prop.');
    } else if (!React.isValidElement<LableProps>(lable) && lable !== undefined) {
        console.warn('⚠️ Wrong format of lable prop. Forward "string" or <Lable> component.');
    }
}
