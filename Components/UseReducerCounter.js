

import React, { useReducer } from 'react'
import { ScrollView, Button, Text, View, StyleSheet, TouchableHighlight } from 'react-native'

const initialValue = 0;

const reducer = (state, action) => {
    switch (action) {
        case 'increment' : 
            return state + 1;
        case 'decrement' : 
            return state - 1;
        case 'reset' :
            return initialValue;
        default :
            return state
    }
}

function UseReducerCounter() {

        const [count,dispatch] = useReducer(reducer, initialValue)

    return (
        <View style={styles.container}>
            <Text>{count}</Text>
            <Button title='Increment' onPress={() => dispatch('increment')} />
            <Button title='Decrement' onPress={() => dispatch('decrement')} />
            <Button title='Reset' onPress={() => dispatch('reset')} />
            <TouchableHighlight style={{backgroundColor:'dodgerblue',padding:20,width:'50%',alignItems:'center',borderRadius:50}} onPress={() => dispatch('increment')} 
            >
                <Text style={{color:'white'}}>Increment</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default UseReducerCounter
