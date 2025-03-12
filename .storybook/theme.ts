import {create} from '@storybook/theming';

export const CloudThemeLight = create({
    base: 'light',

    colorPrimary: '#022FF8',
    colorSecondary: 'rgba(2, 47, 248, 0.3)',

    fontBase: '"Non Bureau", Inter, Helvetica Neue, Helvetica, Arial, sans-serif',
    fontCode:
        '"SF Mono", "Menlo", "Monaco", "Consolas", "Ubuntu Mono", "Liberation Mono", "DejaVu Sans Mono", "Courier New", "Courier", monospace',

    textColor: 'black',
    textInverseColor: 'black',

    barTextColor: 'white',
    barSelectedColor: 'rgba(255, 255, 255, 0.9)',
    barBg: 'rgba(2, 47, 248, 0.5)',

    inputBg: 'white',
    inputBorder: 'gray',
    inputTextColor: 'black',
    inputBorderRadius: 64,

    brandUrl: 'https://sportexclub.com',
    brandTitle: `<div style="font-size: 18px; color: #022FF8; font-weight: 600; margin-top: -6px; margin-bottom: 2px;">Sexds</div>
                <div style="font-size: 14px;color: #7d7d7d; font-weight: 400;">UIKit</div>`,
});

export const CloudThemeDark = create({
    base: 'dark',
});

export const themes = {
    light: CloudThemeLight,
    dark: CloudThemeDark,
};