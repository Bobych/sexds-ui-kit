import React from 'react';
import {DropdownSizes} from "./types";

import {Title, TitleProps} from "./Title";
import {Block, BlockProps} from "./Block";
import {block} from "utils/block";

import './Dropdown.scss';

const b = block('dropdown');

interface DropdownElementProps {
    title: Omit<TitleProps, 'size'>;
    blocks: Omit<BlockProps, 'size'>[];
}

export interface DropdownProps
    extends React.HTMLAttributes<HTMLDivElement> {
    size?: DropdownSizes;
    elements: DropdownElementProps[];
    extraProps?: React.HTMLAttributes<HTMLDivElement>;
}

export const Dropdown = React.forwardRef(function Dropdown(
        props: DropdownProps,
        ref: React.Ref<HTMLDivElement>
    ) {
        const {
            size = 's',
            elements,
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
        }

        return (
            <div
                {...(rest as Pick<typeof props, keyof typeof rest>)}
                {...(extraProps as (typeof props)['extraProps'])}
                {...commonProps}
                ref={ref}
            >
                {elements.map((el, index) => (
                    <div
                        key={index}
                        className={b('element')}
                    >
                        <Title
                            title={el.title.title}
                            subtitle={el.title.subtitle}
                            size={size}
                        />
                        <div
                            className={b('blocks')}
                        >
                            {el.blocks.map((block, blockIndex) => (
                                <Block
                                    {...block}
                                    key={blockIndex}
                                    size={size}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        );
});
