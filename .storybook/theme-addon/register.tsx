import * as React from 'react';

import type {API} from '@storybook/manager-api';
import {addons, types, useGlobals} from '@storybook/manager-api';

import {themes} from '../theme';
import {ThemeType} from "@/components/theme/types.ts";

const ADDON_ID = 'theme-addon';
const TOOL_ID = `${ADDON_ID}tool`;

addons.register(ADDON_ID, (api) => {
    addons.add(TOOL_ID, {
        type: types.TOOL,
        title: 'Theme',
        render: () => {
            return <Tool api={api} />;
        },
    });
});

function Tool({api}: {api: API}) {
    const [{
        theme
    }] = useGlobals();
    React.useEffect(() => {
        api.setOptions({
            theme: themes[theme as ThemeType]
        });
    }, [theme]);
    return null;
}