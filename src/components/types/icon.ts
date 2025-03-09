import * as Icons from '@phosphor-icons/react';

export type IconType = keyof Omit<typeof Icons, 'SSR' | 'IconContext' | 'IconBase' | 'Icon' | 'IconProps' | 'IconWeight'>;

export const IconNames = [
    undefined,
    ...Object.keys(Icons).filter(
        (key) =>
            !['SSR', 'IconContext', 'IconBase', 'Icon', 'IconProps', 'IconWeight'].includes(key)
    ) as IconType[]
];
