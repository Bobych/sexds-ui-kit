import { default as React } from '../../../node_modules/react';
import { IconWeight } from '@phosphor-icons/react';
interface IconComponentProps {
    icon: React.ReactNode;
    weight?: IconWeight;
}
export declare const Icon: React.ForwardRefExoticComponent<IconComponentProps & React.RefAttributes<HTMLSpanElement>>;
export {};
