import React, { createContext, useContext } from 'react'
import { Text, View } from 'react-native';
import ChildComponent from './ChildComponent';
import {ThemeContext} from './Context';

import PropTypes from 'prop-types'

function Header({name, age, city}) {

    const  data  = useContext(ThemeContext);

    return (
        <View>
        {/* <ThemeContext.Consumer>
            {
                data => <Text>Data From Context: {data}</Text>

            }
        </ThemeContext.Consumer> */}
        <Text>Data from Context : {data}</Text>
        <ChildComponent />
        <Text>{name}</Text>
        <Text>{age}</Text>
        <Text>{city}</Text>
        </View>
    )
}

Header.propTypes = {
    name : PropTypes.string,
    age : PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    city : PropTypes.string
}


export default Header
