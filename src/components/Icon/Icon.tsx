import {FC} from 'react';
import {Icon, IconProps} from '@phosphor-icons/react';

import {block} from '../utils/block.ts';
import {IconType} from '../types/icon.ts';
import * as Icons from '@phosphor-icons/react';

interface IconComponentProps extends IconProps {
    name?: IconType
    blockName?: string;
}

const CustomIcon: FC<IconComponentProps> = ({
    name,
    blockName = ''
}) => {
    const b = block(blockName, 'icon');

    if (!name) {
        return null;
    }

    const IconComponent: Icon = Icons[name];
    if (!IconComponent) {
        console.warn(`Icon "${name}" is no found in @phosphor-icons/react/dist/ssr.`)
        return null;
    }

    return <IconComponent className={b()} weight='fill' />;
}

export default CustomIcon;