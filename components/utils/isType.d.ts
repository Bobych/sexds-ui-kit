import * as React from 'react';
export declare function isType<P = undefined>(Component: React.ComponentType<P> | string): (component: unknown) => component is React.ReactElement<P, typeof Component>;
