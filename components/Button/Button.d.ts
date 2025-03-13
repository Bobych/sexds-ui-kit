import { IconType } from '../types/icon';
import { ButtonSizes, ButtonViews, ButtonVariants } from './constants';
import * as React from "react";
interface ButtonCommonProps {
    variant?: ButtonVariants;
    view?: ButtonViews;
    size?: ButtonSizes;
    leftIcon?: IconType;
    rightIcon?: IconType;
    action?: boolean;
    selected?: boolean;
    disabled?: boolean;
    children?: React.ReactNode;
}
interface ButtonButtonProps extends ButtonCommonProps, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'> {
    component?: never;
    href?: never;
    extraProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}
interface ButtonLinkProps extends ButtonCommonProps, React.AnchorHTMLAttributes<HTMLAnchorElement> {
    component?: never;
    href: string;
    extraProps?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
}
type ButtonProps = ButtonButtonProps | ButtonLinkProps;
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export default Button;
