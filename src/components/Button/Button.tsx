"use client";

import React from "react";
import {Icon} from "components";
import type {ButtonSizes, ButtonViews, ButtonVariants} from "./types";

import {eventBroker} from "utils/eventBroker";
import {block} from "utils/block";

import "./Button.scss";

const b = block('button');

export interface ButtonCommonProps {
    variant?: ButtonVariants,
    view?: ButtonViews,
    size?: ButtonSizes,
    loading?: boolean,
    disabled?: boolean,
    leftIcon?: React.ElementType,
    rightIcon?: React.ElementType,
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
        checkProps(props);

        const {
            variant = 'default',
            view = 'default',
            size = 'm',
            loading = false,
            disabled = false,
            leftIcon,
            rightIcon,
            children,
            extraProps,
            onClickCapture,
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

                if (onClickCapture) {
                    onClickCapture(event);
                }
            },
            [view, onClickCapture],
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
                    {leftIcon && <Icon data={leftIcon}/>}
                    <span className={b('content')}>{children}</span>
                    {rightIcon && <Icon data={rightIcon}/>}
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
                {leftIcon && <Icon data={leftIcon}/>}
                <span className={b('content')}>{children}</span>
                {rightIcon && <Icon data={rightIcon}/>}
            </button>
        );
    }
);

function checkProps({children}: ButtonProps) {
    if (typeof children !== 'string') {
        console.warn('Use element of type "string" as children in component.');
    }
}
