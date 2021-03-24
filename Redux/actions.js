

export const incrementCount = (firstName,lastName) => {
    return {
        type: 'INCREMENT_COUNT',
        firstName: firstName,
        lastName: lastName
    }
}

export const decrementCount = () => {

    return {
        type: 'DECREMENT_COUNT',
    }
}

// export const getCountValue = () => {
//     return{
//         type: 'GET_COUNT'
//     }
// }