import * as React from 'react';
import * as Icons from '@phosphor-icons/react';

import type {IconType} from '../types/icon.ts';
import {block} from '../utils/block';

interface IconComponentProps extends Icons.IconProps {
    name?: IconType
    blockName?: string;
}

const CustomIcon: React.FC<IconComponentProps> = ({
    name,
    height,
    blockName = ''
}) => {
    const b = block(blockName, 'icon');

    if (!name) {
        return null;
    }

    const IconComponent: Icons.Icon = Icons[name];
    if (!IconComponent) {
        console.warn(`Icon "${name}" is no found in @phosphor-icons/react/dist/ssr.`)
        return null;
    }

    return <IconComponent
        className={b()}
        height={height}
        weight='fill'
    />;
}

export default CustomIcon;