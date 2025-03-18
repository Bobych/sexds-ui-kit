"use client";

import React from 'react';
import {DefaultTheme} from "./constants";
import type {ThemeType} from "./types";

import {ThemeContext} from "./ThemeContext";

export function ThemeProvider({
    theme = DefaultTheme,
    children
}: {
    theme?: ThemeType,
    children: React.ReactNode
}) {
    React.useEffect(() => {
        document.documentElement.setAttribute('theme', theme);
        document.body.style.background = theme === 'dark' ? '#383838' : '#f5f5f5';
    }, [theme]);

    return (
        <ThemeContext.Provider value={ theme }>
            {children}
        </ThemeContext.Provider>
    );
}
