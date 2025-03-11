export const ButtonVariantsNames = ['default', 'invert', 'accent', 'success', 'warning', 'error'] as const;
export const ButtonSizesNames = ['xs', 's', 'm', 'l', 'xl'] as const;
export const ButtonViewsNames = ['default', 'tone', 'outline', 'text'] as const;

export type ButtonVariants = typeof ButtonVariantsNames[number];
export type ButtonSizes = typeof ButtonSizesNames[number];
export type ButtonViews = typeof ButtonViewsNames[number];

