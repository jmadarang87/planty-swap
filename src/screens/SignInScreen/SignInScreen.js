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
import { useForm, Controller } from 'react-hook-form';

const SignInScreen = () => {
	// const [userName, setUserName] = useState('');
	// const [password, setPassword] = useState('');

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm();

	console.log(errors);

	const { height } = useWindowDimensions();

	const navigation = useNavigation();

	const onSignInPressed = (data) => {
		console.log(data);

		// navigation.navigate('Home');
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
					name='username'
					placeholder='Username'
					control={control}
					rules={{ required: 'Username is required.' }}
				/>
				<CustomInput
					name='password'
					placeholder='Password'
					control={control}
					rules={{
						required: 'Password is required.',
						minLength: {
							value: 8,
							message: 'Password should be minimum 8 characters long.',
						},
						maxLength: {
							value: 12,
							message: 'Password should not be more than 12 characters long.',
						},
					}}
					secureTextEntry
				/>

				<CustomButton
					text='Sign In'
					onPress={handleSubmit(onSignInPressed)}
					// bgColor='#3B71F3'
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
