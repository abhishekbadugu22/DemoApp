import React from 'react'
import { StatusBar, Text, View } from 'react-native'

import { Body, Container, Content, Header, Icon, Left, ListItem, Radio, Right, Title } from 'native-base'


function DemoContainer() {
    return (
        <Container>
        <StatusBar backgroundColor='blue' />

            <Header style={{backgroundColor:'tomato',alignItems:'center'}}>
                
                <Left>
                    <Icon name='menu' style={{color:'white'}}></Icon>
                </Left>

                <Body>
                    <Title style={{fontSize:25}}>Cart</Title>
                </Body>

                <Right>
                    <Icon name='search' style={{color:'white'}}></Icon>
                </Right>

            </Header>

            <Content>
                <ListItem>
                    <Left>
                        <Text>List Item 1</Text>
                    </Left>
                    <Right>
                        <Radio selected={true} color={"#fff"} selectedColor={'tomato'}></Radio>
                    </Right>
                </ListItem>
            </Content>
        </Container>
    )
}

export default DemoContainer
