import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { ThemeProvider } from 'styled-components/native';
import { Home, Login, SignUp, Recovery, Dashboard } from './Screens';

import theme from './Theme';

const AppStack = createStackNavigator();

export default function Routes()
{
    return (
        <ThemeProvider theme={theme} >
            <PaperProvider >
                <NavigationContainer >
                    <AppStack.Navigator screenOptions={{headerShown: false, headerMode: 'screen' }}>
                        <AppStack.Screen name="Home" component={Home} />
                        <AppStack.Screen name="Login" component={Login} />
                        <AppStack.Screen name="Register" component={SignUp} />
                        <AppStack.Screen name="Recovery" component={Recovery} />
                        <AppStack.Screen name="Dashboard" component={Dashboard} />
                    </AppStack.Navigator>
                </NavigationContainer>
            </PaperProvider>
        </ThemeProvider>
    );
}