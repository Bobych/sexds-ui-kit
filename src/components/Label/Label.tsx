"use server";

import React from 'react';

import {Icon} from 'components';
import {LabelSizes} from "./types";
import {block} from '../utils/block';
import {IconProps} from "@phosphor-icons/react";

const b = block('label');

interface LabelCommonProps {
    size?: LabelSizes;
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
        ref: React.Ref<HTMLSpanElement>
    ) {
        const {
            size = 'm',
            children,
            extraProps,
            ...rest
        } = props;

        const commonProps = {
            className: b(
                {
                    size: size
                },
                rest.className
            )
        }

        return (
            <span
                {...(rest as Pick<typeof props, keyof typeof rest>)}
                {...(extraProps as (typeof props)['extraProps'])}
                {...commonProps}
                ref={ref as React.Ref<HTMLLabelElement>}
            >
                {prepareChildren(children)}
            </span>
        );
    }
)

function prepareChildren(children: React.ReactNode) {
    const childrenArray = React.Children.toArray(children);

    const icons = childrenArray.filter(
        (child) => React.isValidElement(child) && child.type === Icon
    );

    const icon = icons[0] as React.ReactElement<IconProps> | undefined;

    const text = childrenArray.filter(
        (child) =>
            typeof child === "string" ||
            (React.isValidElement(child) && child.type !== Icon)
    );

    return (
        <>
            {
                React.isValidElement(icon) &&
                React.cloneElement(icon, { className: b('icon') })
            }
            {
                text.length > 0 &&
                <span className={b('content')}>
                    {text}
                </span>
            }
        </>
    );
}
