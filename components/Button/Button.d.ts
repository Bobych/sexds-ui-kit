import { default as React } from '../../../node_modules/react';
import { ButtonSizes, ButtonViews, ButtonVariants } from './types';
export interface ButtonCommonProps {
    variant?: ButtonVariants;
    view?: ButtonViews;
    size?: ButtonSizes;
    loading?: boolean;
    disabled?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
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
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export {};
