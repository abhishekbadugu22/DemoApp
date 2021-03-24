import React from 'react';
import { useState } from 'react';

import { View, Text, Modal, Button } from 'react-native'

function ModalView() {

    const [show,setShow] = useState(false)

    return (
        <View style={{flex:1,margin:20,justifyContent:'center'}}>
            <Text style={{fontSize:30}}>Welcome To Modal</Text>
            <Modal
                transparent={true}
                visible={show}>
                <View style={{backgroundColor:'#000000aa',flex:1}}>
                    <View style={{backgroundColor:'white',margin:50,padding:40,flex:1,borderRadius:20}}>
                        <Text style={{fontSize:30}}>Modal Text</Text>
                        <Button title="Hide Modal" onPress={() => setShow(false)} />
                    </View>
                </View>
            </Modal>
            <Button title="Show Modal" onPress={() => setShow(true)} />
        </View>
        )
}

export default ModalView
