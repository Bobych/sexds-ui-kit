import { default as React } from '../../../../node_modules/react';
import { BlockSizes, BlockTypes } from './types';
export interface BlockProps extends React.HTMLAttributes<HTMLDivElement> {
    type?: BlockTypes;
    size?: BlockSizes;
    textIcon?: React.ReactNode;
    text: string;
    subtextIcon?: React.ReactNode;
    subtext?: string;
    extraProps?: React.HTMLAttributes<HTMLDivElement>;
}
export declare const Block: React.ForwardRefExoticComponent<BlockProps & React.RefAttributes<HTMLDivElement>>;
