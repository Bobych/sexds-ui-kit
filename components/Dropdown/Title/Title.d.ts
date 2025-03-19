import { default as React } from '../../../../node_modules/react';
import { TitleSizes } from './types';
export interface TitleProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: TitleSizes;
    title: string;
    subtitle?: string;
    extraProps?: React.HTMLAttributes<HTMLDivElement>;
}
export declare const Title: React.ForwardRefExoticComponent<TitleProps & React.RefAttributes<HTMLDivElement>>;
