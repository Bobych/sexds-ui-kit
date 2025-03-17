"use client";

import React from "react";
import type {ThemeType} from "./types";
import {DefaultTheme} from "./constants";

export const ThemeContext = React.createContext<ThemeType>(DefaultTheme);
