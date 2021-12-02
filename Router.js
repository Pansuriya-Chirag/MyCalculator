
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './src/pages/HomePage';
import BMIPage from './src/pages/BMIPage';
import CalculatorPage from './src/model/Calculators'
const Stack = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="HomePage">
                <Stack.Screen name="HomePage" component={HomePage} />
                <Stack.Screen name="BMIPage" component={BMIPage} />
                <Stack.Screen name="CalculatorPage" component={CalculatorPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;