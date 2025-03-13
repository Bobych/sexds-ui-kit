import { IconType } from '../types/icon.ts';
import * as React from 'react';
import * as Icons from '@phosphor-icons/react';
interface IconComponentProps extends Icons.IconProps {
    name?: IconType;
    blockName?: string;
}
declare const CustomIcon: React.FC<IconComponentProps>;
export default CustomIcon;
