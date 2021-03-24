

export const ValidateLogin = (values) => {
    if (values.email == '' || values.password == '') {
        const response = {
            msg : 'Fields Empty',
            error : true
        }
        return response
    }
    else {
        const response = {
            msg : 'Data Valid',
            error : false
        }
        return response
    }
}