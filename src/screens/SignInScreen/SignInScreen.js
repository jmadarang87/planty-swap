import React, { useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	useWindowDimensions,
	ScrollView,
} from 'react-native';
import Logo from '../../../assets/images/PlantySwap_Logo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');

	const { height } = useWindowDimensions();

	const navigation = useNavigation();

	const onSignInPressed = () => {
		console.warn('Sign In');
	};

	const onForgotPasswordPressed = () => {
		console.warn('Forgot Password');
		navigation.navigate('ForgotPassword');
	};

	const onCreateAccountPressed = () => {
		console.warn('Create Account');
		navigation.navigate('CreateAccount');
	};

	return (
		<ScrollView>
			<View style={styles.root}>
				<Image
					source={Logo}
					style={[styles.logo, { height: height * 0.2 }]}
					resizeMode='contain'
				/>
				<Text style={styles.title}>Sign In</Text>
				<CustomInput
					placeholder='Username'
					value={userName}
					setValue={setUserName}
				/>
				<CustomInput
					placeholder='Password'
					value={password}
					setValue={setPassword}
					secureTextEntry
				/>
				<CustomButton
					text='Sign In'
					onPress={onSignInPressed}
					bgColor='#3B71F3'
				/>
				<CustomButton
					text='Forgot Password?'
					type={'TERTIARY'}
					onPress={onForgotPasswordPressed}
					fgColor='#363636'
				/>
				<SocialSignInButtons />
				<CustomButton
					text="Don't have an account? Sign Up Now!"
					type={'TERTIARY'}
					onPress={onCreateAccountPressed}
					fgColor='#363636'
				/>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	root: {
		alignItems: 'center',
		padding: 35,
		justifyContent: 'center',
		height: '100%',
	},
	logo: {
		width: '100%',
		maxWidth: 1000,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#051C60',
		margin: 10,
	},
});

export default SignInScreen;
