"use client";

import React from "react";

import {block} from "../utils/block";
import type {ButtonSizes, ButtonViews, ButtonVariants} from "./types";
import {eventBroker} from "../utils/eventBroker";
import {Icon} from './ButtonIcon';

import "./Button.scss";

export interface ButtonCommonProps {
    variant?: ButtonVariants,
    view?: ButtonViews,
    size?: ButtonSizes,
    loading?: boolean,
    disabled?: boolean,
    children?: React.ReactNode
}

interface ButtonButtonProps
    extends ButtonCommonProps,
        Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'> {
    component?: never;
    href?: never;
    extraProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

interface ButtonLinkProps
    extends ButtonCommonProps,
        React.AnchorHTMLAttributes<HTMLAnchorElement> {
    component?: never;
    href: string;
    extraProps?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
}

type ButtonProps =
    | ButtonButtonProps
    | ButtonLinkProps;

export const Button = React.forwardRef(function Button(
    props: ButtonProps,
    ref:
        | React.Ref<HTMLButtonElement>
        | React.Ref<HTMLAnchorElement>
) {
    const {
        variant = 'default',
        view = 'default',
        size = 'm',
        loading = false,
        disabled = false,
        children,
        extraProps,
        ...rest
    } = props;

    const handleClickCapture = React.useCallback(
        (event: React.MouseEvent<HTMLButtonElement> & React.MouseEvent<HTMLAnchorElement>) => {
            eventBroker.publish({
                componentId: 'Button',
                eventId: 'click',
                domEvent: event,
                meta: {
                    content: event.currentTarget.textContent,
                    view: view,
                },
            });

            if (props.onClickCapture) {
                props.onClickCapture(event);
            }
        },
        [view, props.onClickCapture],
    );

    const commonProps = {
        onClickCapture: handleClickCapture,
        className: b(
            {
                variant: variant,
                view: view,
                size: size,
                loading: loading,
                disabled: disabled,
            },
            rest.className
        )
    };

    if (props.href !== undefined) {
        return (
            <a
                {...(rest as Pick<typeof props, keyof typeof rest>)}
                {...(extraProps as (typeof props)['extraProps'])}
                {...commonProps}
                ref={ref as React.Ref<HTMLAnchorElement>}
                rel={props.target === '_blank' && !rest.rel ? 'noopener noreferrer' : rest.rel}
                aria-disabled={disabled ?? undefined}
            >
                {prepareChildren(children)}
            </a>
        );
    }

    return (
        <button
            {...(rest as Pick<typeof props, keyof typeof rest>)}
            {...commonProps}
            ref={ref as React.Ref<HTMLButtonElement>}
            disabled={disabled}
        >
            {prepareChildren(children)}
        </button>
    );
});

const b = block('button');

function prepareChildren(children: React.ReactNode) {
    const childrenArray = React.Children.toArray(children);

    const icons = childrenArray.filter(
        (child) => React.isValidElement(child) && child.type === Icon
    );

    const leftIcon = icons[0];
    const rightIcon = icons[1];

    const text = childrenArray.filter(
        (child) =>
            typeof child === "string" ||
            (React.isValidElement(child) && child.type !== Icon)
    );

    return (
        <>
            {
                React.isValidElement(leftIcon) &&
                React.cloneElement(leftIcon)
            }
            {text.length > 0 && <span className={b('content')}>{text}</span>}
            {
                React.isValidElement(rightIcon) &&
                React.cloneElement(rightIcon)
            }
        </>
    );
}
