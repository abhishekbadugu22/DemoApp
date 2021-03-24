import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'

const DashboardComponent = () => {

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <Text>Dashboard Screen</Text>
            <Button title='Details Screen' onPress={() => navigation.navigate('Details')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    }
});

export default DashboardComponent;
