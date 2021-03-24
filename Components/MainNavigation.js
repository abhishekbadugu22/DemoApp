import React from 'react';
import { Text, View } from 'react-native';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeComponent from './HomeComponent';
import DetailsComponent from './DetailsComponent';
import DashboardComponent from './DashboardComponent';
 import Icon from 'react-native-vector-icons/Ionicons'
import { useEffect } from 'react';
const MainNavigation = () => {

    const Tab = createMaterialBottomTabNavigator();

    

    return (
        <Tab.Navigator sceneAnimationEnabled={true}>
            <Tab.Screen 
                name='Home'
                component={HomeComponent}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                      <Icon name='menu' color={color} size={26} />
                    ),
                  }}
            >
            </Tab.Screen>

            <Tab.Screen 
                name='Details'
                component={DetailsComponent}
                options={{
                    tabBarLabel: null,
                    tabBarIcon: ({ color }) => (
                      <Icon name="rocket" color={color} size={26}  />
                    ),
                  }}
            >
            </Tab.Screen>

            <Tab.Screen 
                name='Dashboard'
                component={DashboardComponent}
            >
            </Tab.Screen>
        </Tab.Navigator>
    );
}

export default MainNavigation;
