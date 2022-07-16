import React from 'react';
import { View, Text } from 'react-native';
import SignInScreen from '../screens/SignInScreen';
import CreateAccountScreen from '../screens/CreateAccountScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Navigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name='SignIn' component={SignInScreen} />
				<Stack.Screen name='CreateAccount' component={CreateAccountScreen} />
				<Stack.Screen name='ConfirmEmail' component={ConfirmEmailScreen} />
				<Stack.Screen name='NewPassword' component={NewPasswordScreen} />
				<Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigation;
