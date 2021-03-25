import React, {useEffect} from 'react'
import { View,Text, Button, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { fetchData } from '../Redux/UserRedux/UserAction'
import AsyncStorage from '@react-native-async-storage/async-storage';

function UserContainer(props) {


    // useEffect( async() => {
    //     const data = await AsyncStorage.getItem('root');
    //     console.log(data);
    // },[])

    const removeData = async() => {
        await AsyncStorage.removeItem("persist:root")
    }

    return (
        <View>
            <Button title='FetchData' onPress={props.fetchData} />
            {
                props.UserData.isLoading ? ( <ActivityIndicator color='black' /> ) 
                :
                (
                    props.UserData.data.map(item => (
                    <Text key={item.id}>{item.name}</Text>
                    ))  
                )
            }
            <Button title="remove item" onPress={() => removeData()} />
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        UserData: state.user
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(fetchData())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserContainer)
