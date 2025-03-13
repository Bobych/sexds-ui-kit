import * as React from "react";

import type {ThemeType} from "./types";
import {DEFAULT_THEME} from "./constants";


export const ThemeContext = React.createContext<ThemeType>(DEFAULT_THEME);
