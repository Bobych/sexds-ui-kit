import React from 'react';
import {Icon} from 'components';
import {BlockSizes, BlockTypes} from "./types";

import {block} from "utils/block";

import './Block.scss';

const b = block('block');

export interface BlockProps
    extends React.HTMLAttributes<HTMLDivElement> {
    type?: BlockTypes;
    size?: BlockSizes;
    textIcon?: React.ReactNode;
    text: string;
    subtextIcon?: React.ReactNode;
    subtext?: string;
    extraProps?: React.HTMLAttributes<HTMLDivElement>
}

export const Block = React.forwardRef(function Block(
        props: BlockProps,
        ref: React.Ref<HTMLDivElement>
    ) {

        const {
            type = 'default',
            size = 's',
            textIcon,
            text,
            subtextIcon,
            subtext,
            extraProps,
            ...rest
        } = props;

        const commonProps = {
            className: b(
                {
                    type: type,
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
                <div className={b('text')}>
                    {textIcon && <Icon icon={textIcon} />}
                    {text && <span className={b('text-content')}>{text}</span>}
                </div>

                <div className={b('subtext')}>
                    {subtextIcon && <Icon icon={subtextIcon} />}
                    {subtext && <span className={b('subtext-content')}>{subtext}</span>}
                </div>
            </div>
        );
});

