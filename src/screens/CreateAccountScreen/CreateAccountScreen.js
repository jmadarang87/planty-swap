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

const CreateAccountScreen = () => {
	// const [userName, setUserName] = useState('');
	// const [email, setEmail] = useState('');
	// const [password, setPassword] = useState('');
	// const [confirmPassword, setConfirmPassword] = useState('');

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const { height } = useWindowDimensions();

	const navigation = useNavigation();

	const onRegisterPressed = (data) => {
		console.warn('Registered!');
		navigation.navigate('ConfirmEmail');
	};

	const onTermsOfUsePressed = () => {
		console.warn('onTermsOfUsePressed');
	};

	const onPrivacyPressed = () => {
		console.warn('onPrivacyPressed');
	};

	const onSignUpFacebookPressed = () => {
		console.warn('Sign Up with Facebook');
	};

	const onSignUpGooglePressed = () => {
		console.warn('Sign Up with Google');
	};

	const onLogInNowPressed = () => {
		console.warn('Log In Now!');
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
				<Text style={styles.title}>Create Account</Text>
				<CustomInput
					name='username'
					placeholder='Username'
					control={control}
					rules={{ required: 'Username is required.' }}
				/>
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
				{/* 
				<CustomInput
					placeholder='Username'
					value={userName}
					setValue={setUserName}
				/>
				<CustomInput
					placeholder='Email Address'
					value={email}
					setValue={setEmail}
				/>
				<CustomInput
					placeholder='Password'
					value={password}
					setValue={setPassword}
					secureTextEntry
				/>
				<CustomInput
					placeholder='Confirm Password'
					value={confirmPassword}
					setValue={setConfirmPassword}
					secureTextEntry */}
				<Text>
					By registering, you confirm that you accept our{' '}
					<Text style={styles.link} onPress={onTermsOfUsePressed}>
						Terms of Use
					</Text>{' '}
					and
					<Text style={styles.link} onPress={onPrivacyPressed}>
						{' '}
						Privacy Policy
					</Text>
					.
				</Text>
				<CustomButton
					text='Register'
					onPress={handleSubmit(onRegisterPressed)}
					bgColor='#3B71F3'
				/>
				<CustomButton
					text='Sign Up with Facebook'
					onPress={onSignUpFacebookPressed}
					bgColor='#E7EAF4'
					fgColor='#4765A9'
				/>
				<CustomButton
					text='Sign Up with Google'
					onPress={onSignUpGooglePressed}
					bgColor='#FAE9EA'
					fgColor='#DD4D44'
				/>
				<CustomButton
					text='Have have an account? Log In Now!'
					type={'TERTIARY'}
					onPress={onLogInNowPressed}
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
	link: {
		color: 'green',
	},
});

export default CreateAccountScreen;
