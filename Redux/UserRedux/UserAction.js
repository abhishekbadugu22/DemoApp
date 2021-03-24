
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'

export const FetchDataRequest = () => {
    return {
        type: 'FETCH_DATA_REQUEST'
    }
}

export const FetchDataSuccessful = (data) => {
    return {
        type : 'FETCH_DATA_SUCCESSFUL',
        payload: data
    }
}

export const FetchDataFailuer = () => {
    return {
        type: 'FETCH_DATA_FAILURE'
    }
}

export const fetchData = () => {
    return (dispatch) => {

        dispatch(FetchDataRequest)

        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            const users = response.data;
            dispatch(FetchDataSuccessful(users));

        })
        .catch((error) => {
            dispatch(FetchDataFailuer)
        })
    }
}