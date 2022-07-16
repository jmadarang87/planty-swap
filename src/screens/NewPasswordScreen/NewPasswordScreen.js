import React from 'react';
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
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';

const NewPasswordScreen = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const { height } = useWindowDimensions();

	const navigation = useNavigation();

	const onResetPressed = (data) => {
		console.warn('Reset Password');
		navigation.navigate('SignIn');
	};

	const onSignInPressed = () => {
		console.warn('Sign In');
		navigation.navigate('SignIn');
	};

	return (
		<ScrollView>
			<View style={styles.root}>
				<Image
					source={Logo}
					style={[styles.logo, { height: height * 0.2 }]}
					resizeMode='contain'
				/>
				<Text style={styles.title}>Create a New Password</Text>

				<Text style={styles.label}>Email</Text>
				<CustomInput
					name='email'
					placeholder='Email'
					control={control}
					rules={{
						required: 'Email is required.',
						pattern: {
							value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
							message: 'Please enter a valid email',
						},
					}}
				/>
				<Text style={styles.label}>Confirmation Code</Text>
				<CustomInput
					name='confirmation'
					placeholder='Confirmation Code'
					control={control}
					rules={{ required: 'Confirmation Code is required.' }}
				/>
				<Text style={styles.label}>New Password</Text>

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
				<Text style={styles.label}>Confirm New Password</Text>
				<CustomInput
					name='password2'
					placeholder='Confirm Password'
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
					text='Reset'
					type='PRIMARY'
					onPress={handleSubmit(onResetPressed)}
				/>
				<CustomButton
					text='Please Sign In / Sign Up'
					type={'TERTIARY'}
					onPress={onSignInPressed}
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
	label: {
		width: '100%',
		alignItems: 'left',
	},
});

export default NewPasswordScreen;
