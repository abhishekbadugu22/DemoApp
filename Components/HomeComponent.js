import React, {useEffect} from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons//Ionicons';
import { useState } from 'react';

import { incrementCount, decrementCount } from '../Redux/actions';
import { connect } from 'react-redux'

const HomeComponent = (props) => {

    const [firstName,setFirstName] = useState('Abhishek');
    const [lastName,setLastName] = useState('Badugu')

    // const [count, setcount] = useState(0);

    // const navigation = useNavigation();

    // useEffect(() => {
    //     console.log('useEffect');

    //     return (
    //         console.log('cleanup')
    //     )
    // })

    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button title='Details Screen' onPress={() => navigation.navigate('Details')}/>
            <Button title='Dashboard Screen' onPress={() => navigation.navigate('Dashboard')}/>
            <Icon name='menu' size={30}></Icon>
            <Button title='IncreaseCount' onPress={() => props.incrementCount(firstName,lastName)} />
            <Button title="DecrementCount" onPress={() => props.decrementCount()} />
            <Text>{props.count}</Text>
        </View>
    );
}

const mapStateToProps = state => {
    return {
        count: state.count.count
    }
}

const mapDispatchToProps = dispatch => {
    return {
        incrementCount: (firstName,lastName) => dispatch(incrementCount(firstName,lastName)),
        decrementCount: () => dispatch(decrementCount())
    }
}



const styles = StyleSheet.create({
    container : {
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(HomeComponent);
