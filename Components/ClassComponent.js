import React, { Component } from 'react'
import { View, Button,Text, SafeAreaView } from 'react-native'

export default class ClassComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    incrementCount = () => {
        //console.log(this.state.count);
        this.setState((state) => {
            return {count: state.count + 1}
        },() => {console.log(this.state.count)
                console.log({} == {})})
    }

    incrementCountByThree = () => {
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
    }
    
    

    render() {

        

        return (
            <SafeAreaView>
                <Text>State : {this.state.count}</Text>
                <Button title='Increment' onPress={this.incrementCountByThree} />
            </SafeAreaView>
        )
    }
}
