import React from 'react';
import {Icon} from 'components';
import {TitleSizes} from "./types";

import {block} from "utils/block";

import './Title.scss';

const b = block('title');

export interface TitleProps
    extends React.HTMLAttributes<HTMLDivElement> {
    size?: TitleSizes;
    title: string;
    subtitle?: string;
    extraProps?: React.HTMLAttributes<HTMLDivElement>
}

export const Title = React.forwardRef(function Title(
    props: TitleProps,
    ref: React.Ref<HTMLDivElement>
) {

    const {
        size = 's',
        title,
        subtitle,
        extraProps,
        ...rest
    } = props;

    const commonProps = {
        className: b(
            {
                size: size
            },
            rest.className
        )
    };

    return (
        <div
            {...(rest as Pick<typeof props, keyof typeof rest>)}
            {...(extraProps as (typeof props)['extraProps'])}
            {...commonProps}
            ref={ref}
        >
            {title && <span className={b('title')}>{title}</span>}
            {subtitle && <span className={b('subtitle')}>{subtitle}</span>}
        </div>
    );
});

