import * as React from "react";

import {block} from "../utils/block";
import "./Button.scss";
import type {IconType} from "../types/icon";
import {ButtonSizes, ButtonViews, ButtonVariants} from "./constants";
import CustomIcon from "../Icon/Icon";
import {eventBroker} from "../utils/eventBroker";

interface ButtonCommonProps {
    variant?: ButtonVariants,
    view?: ButtonViews,
    size?: ButtonSizes,
    leftIcon?: IconType,
    rightIcon?: IconType,
    action?: boolean,
    selected?: boolean,
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

const Button = React.forwardRef(function Button(
    props: ButtonProps,
    ref:
        | React.Ref<HTMLButtonElement>
        | React.Ref<HTMLAnchorElement>
) {
    const {
        variant = 'default',
        view = 'default',
        size = 'm',
        leftIcon,
        rightIcon,
        action = false,
        selected = false,
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
                action: action,
                selected: selected,
                disabled: disabled,
            },
            rest.className
        )
    };

    if (typeof props.href !== 'undefined') {
        return (
            <a
                {...(rest as Pick<typeof props, keyof typeof rest>)}
                {...(extraProps as (typeof props)['extraProps'])}
                {...commonProps}
                ref={ref as React.Ref<HTMLAnchorElement>}
                rel={props.target === '_blank' && !rest.rel ? 'noopener noreferrer' : rest.rel}
                aria-disabled={disabled ?? undefined}
            >
                <CustomIcon name={leftIcon} blockName='button' />
                {children}
                <CustomIcon name={rightIcon} blockName='button' />
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
            <CustomIcon name={leftIcon} blockName='button' />
            {children}
            <CustomIcon name={rightIcon} blockName='button' />
        </button>
    );
});

const b = block('button');

export default Button;