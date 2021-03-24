
const initialUserState = {
    isLoading: true,
    data: [],
    error: null
}

const userReducer = (state = initialUserState, action) => {
    switch(action.type) {
        case 'FETCH_DATA_REQUEST' :
            return {
                ...state,
                isLoading: true,
            }
        case 'FETCH_DATA_SUCCESSFUL' :
            return {
                ...state,
                isLoading: false,
                data : action.payload
            }
        case 'FETCH_DATA_FAILURE' : 
            return {
                ...state,
                isLoading: false,
                error: 'Something Went Wrong!!'
            }
        default : return state
    }
}

export default userReducer