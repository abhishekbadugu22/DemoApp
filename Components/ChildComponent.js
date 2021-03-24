import React from 'react'
import { Text, View } from 'react-native'

import { ThemeContext } from'./Context';
import { memo } from 'react';

function ChildComponent() {
    return (
        <ThemeContext.Consumer>
            {
                data => <Text>Child Data: {data}</Text>
            }

        </ThemeContext.Consumer>
    )
}

export default memo(ChildComponent)
