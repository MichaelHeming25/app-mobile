import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Main from './pages/main';
import Detail from './pages/detail';

const Stack = createStackNavigator();

export default function StackRoutes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Main">
                <Stack.Screen name="Main" component={Main} options={StyleNav.default} />
                <Stack.Screen name="Detail" component={Detail} options={StyleNav.default} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

const StyleNav = {
    default: {
        title: 'FasipeADS',
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: '#3466cc',
        }
    }
}