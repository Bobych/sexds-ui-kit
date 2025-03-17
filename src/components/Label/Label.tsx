import React from 'react';
import {Icon} from 'components';
import {LabelSizes, LabelTypes} from './types';

import {block} from 'utils/block';

import './Label.scss';

const b = block('label');

interface LabelCommonProps {
    type?: LabelTypes;
    size?: LabelSizes;
    icon?: React.ElementType;
    children?: React.ReactNode;
}

interface LabelProps
    extends LabelCommonProps,
        React.LabelHTMLAttributes<HTMLSpanElement> {
    component?: never;
    extraProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
}

export const Label = React.forwardRef(function Label(
        props: LabelProps,
        ref: React.Ref<HTMLLabelElement>
    ) {
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
                {icon && <Icon data={icon} />}
                {children}
            </label>
        );
    }
)
