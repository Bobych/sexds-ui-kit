import { default as React } from '../../../node_modules/react';
import { LableSizes, LableTypes } from './types';
export interface LableProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    type?: LableTypes;
    size?: LableSizes;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    children?: React.ReactNode;
    extraProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
}
export declare const Lable: React.ForwardRefExoticComponent<LableProps & React.RefAttributes<HTMLLabelElement>>;
