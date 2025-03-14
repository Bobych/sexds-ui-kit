import { default as React } from 'react';
import { ButtonSizes, ButtonViews, ButtonVariants } from './types';
export interface ButtonCommonProps {
    variant?: ButtonVariants;
    view?: ButtonViews;
    size?: ButtonSizes;
    loading?: boolean;
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
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export {};
