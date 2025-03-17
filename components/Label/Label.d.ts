import { default as React } from '../../../node_modules/react';
import { LabelSizes, LabelTypes } from './types';
interface LabelCommonProps {
    type?: LabelTypes;
    size?: LabelSizes;
    children?: React.ReactNode;
}
interface LabelProps extends LabelCommonProps, React.LabelHTMLAttributes<HTMLSpanElement> {
    component?: never;
    extraProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
}
export declare const Label: React.ForwardRefExoticComponent<LabelProps & React.RefAttributes<HTMLLabelElement>>;
export {};
