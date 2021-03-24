import React from 'react';
import { Text, View, StyleSheet , Button} from 'react-native';
import { useNavigation } from '@react-navigation/native'

import { connect } from 'react-redux'

import { useEffect } from 'react';

const DetailsComponent = (props) => {

    const navigation = useNavigation();


    // useEffect(() => {
    //     props.getCountValue
    // },[])

    return (
        <View style={styles.container}>
            <Text>Details Screeen</Text>
            <Button title='Home Screen' onPress={() => navigation.navigate('Home')}/>
            <Text>{props.count}</Text>
            <Text>{props.firstName}</Text>
            <Text>{props.lastName}</Text>
        </View>
    );
}

const mapStateToProps = (state) => {
    return {
        count: state.count.count,
        firstName: state.count.firstName,
        lastName: state.count.lastName
    }
}


const styles = StyleSheet.create({
    container : {
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    }
});

export default connect(mapStateToProps)(DetailsComponent)
