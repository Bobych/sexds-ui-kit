import React from "react";

import {block} from "../utils/block.ts";
import "./button.scss";
import {IconType} from "../types/icon.ts";
import {ButtonSizes, ButtonStatuses, ButtonViews, ButtonVariants} from "./constants.ts";
import CustomIcon from "../Icon/Icon.tsx";

interface ButtonCommonProps {
    variant?: ButtonVariants,
    view?: ButtonViews,
    size?: ButtonSizes,
    status?: ButtonStatuses,
    leftIcon?: IconType,
    rightIcon?: IconType,
    selected?: boolean,
    disabled?: boolean,
    loading?: boolean,
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
        status = 'default',
        leftIcon,
        rightIcon,
        disabled = false,
        children,
        extraProps,
        ...rest
    } = props;

    const commonProps = {
        className: b(
            {
                variant: variant,
                view: view,
                size: size,
                status: status,
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