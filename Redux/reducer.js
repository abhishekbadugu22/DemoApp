
const initialState = {
    count: 0,
    firstName: null,
    lastName: null
}

const countReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INCREMENT_COUNT' : return {
            ...state,
            count: state.count + 1,
            firstName: action.firstName,
            lastName: action.lastName
        }
        case 'DECREMENT_COUNT' : return {
            ...state,
            count: state.count - 1,
            firstName: null
        }
        default : return state
    }
}

export default countReducer