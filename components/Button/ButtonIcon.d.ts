import { default as React } from '../../../node_modules/react';
import { IconProps } from '@phosphor-icons/react';
import { ButtonIconSides } from './types';
interface IconComponentProps extends IconProps {
    data: React.ElementType;
    side: ButtonIconSides;
}
export declare const Icon: React.ForwardRefExoticComponent<Omit<IconComponentProps, "ref"> & React.RefAttributes<HTMLSpanElement>>;
export {};
