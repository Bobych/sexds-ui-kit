import React from 'react';
import {IconProps, IconWeight} from '@phosphor-icons/react';

import './Icon.scss';

interface IconComponentProps {
    icon: React.ReactNode;
    weight?: IconWeight;
}

export const Icon = React.forwardRef<HTMLSpanElement, IconComponentProps>(
    ({
        icon,
        weight = 'fill'
     }, ref) => {
        if (!React.isValidElement<IconProps>(icon)) {
            return null;
        }

        return (
            <span className='icon' ref={ref}>
                {
                    React.cloneElement(icon, { weight: icon.props.weight ?? weight })
                }
            </span>
        );
    }
);
