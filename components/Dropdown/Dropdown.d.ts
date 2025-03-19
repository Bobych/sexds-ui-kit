import { default as React } from '../../../node_modules/react';
import { DropdownSizes } from './types';
import { TitleProps } from './Title';
import { BlockProps } from './Block';
interface DropdownElementProps {
    title: Omit<TitleProps, 'size'>;
    blocks: Omit<BlockProps, 'size'>[];
}
export interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: DropdownSizes;
    elements: DropdownElementProps[];
    extraProps?: React.HTMLAttributes<HTMLDivElement>;
}
export declare const Dropdown: React.ForwardRefExoticComponent<DropdownProps & React.RefAttributes<HTMLDivElement>>;
export {};
