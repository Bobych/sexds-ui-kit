import { default as React } from '../../../node_modules/react';
import { LabelSizes, LabelTypes } from './types';
export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    type?: LabelTypes;
    size?: LabelSizes;
    icon?: React.ReactNode;
    lable?: React.ReactNode;
    children?: React.ReactNode;
    extraProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
}
export declare const Label: React.ForwardRefExoticComponent<LabelProps & React.RefAttributes<HTMLLabelElement>>;
