import React, { useEffect, useState } from 'react'
import { Text, TextInput, View , StyleSheet, Button, SafeAreaView} from 'react-native'
import { Formik } from 'formik';

import { ValidateLogin } from './Helper';
import { color } from 'react-native-reanimated';

function LoginComponent() {

    const [focus,setFocus] = useState(false);


    const handleLoginSubmit = (values) => {
        const response = ValidateLogin(values);
        if (response.error) {
            console.log(response.msg);
        }
        else {
            console.log(response.msg);
            console.log(values);
        }
    }

    useEffect(function(){
        console.log('abhishek');
    },[])

    return (
        <SafeAreaView style={{flex:1, justifyContent:'center', alignItems:'center',width:'100%'}} >
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                onSubmit={(values, {resetForm}) => {
                    handleLoginSubmit(values);
                    resetForm();
                    
                }}
            >
                {(props) => (
                    <View style={styles.formContainer}>
                        
                        <Text style={{marginTop:20}}>Email</Text>
                        <TextInput 
                        placeholder="email"
                        style={styles.inputStyle}
                        onChangeText={props.handleChange('email')}
                        value={props.values.email}
                        onFocus={()=>{{styles.focusInput}}}
                        />

                        <Text style={{marginTop:20}}>Password</Text>
                        <TextInput 
                        placeholder="password"
                        style={styles.inputStyle, focus ? {borderColor:'green',borderWidth:2}: {borderColor:'black',borderWidth:2}}
                        onChangeText={props.handleChange('password')}
                        //onBlur={props.handleBlur('password')}
                        value={props.values.password}
                        secureTextEntry={true}
                        onFocus={()=>setFocus(true)}
                        onBlur={() => setFocus(false)}
                        />

                        <Button title="submit" onPress={props.handleSubmit} />
                    </View>
                )}

            </Formik>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    inputStyle: {
        borderBottomColor:'black',
        borderBottomWidth:1,
    },
    formContainer : {
        width:'80%'
    },
    
})

export default LoginComponent
