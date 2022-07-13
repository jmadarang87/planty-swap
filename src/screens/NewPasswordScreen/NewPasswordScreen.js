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
import { useNavigation } from '@react-navigation/native';

const NewPasswordScreen = () => {
	const [email, setEmail] = useState('');
	const [code, setCode] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const { height } = useWindowDimensions();

	const navigation = useNavigation();

	const onResetPressed = () => {
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
					placeholder='Enter Your Email'
					value={email}
					setValue={setEmail}
				/>
				<Text style={styles.label}>Confirmation Code</Text>
				<CustomInput
					placeholder='Enter your confirmation code'
					value={code}
					setValue={setCode}
				/>
				<Text style={styles.label}>New Password</Text>
				<CustomInput
					placeholder='Password'
					value={password}
					setValue={setPassword}
					secureTextEntry
				/>
				<Text style={styles.label}>Confirm New Password</Text>
				<CustomInput
					placeholder='Confirm New Password'
					value={confirmPassword}
					setValue={setConfirmPassword}
					secureTextEntry
				/>
				<CustomButton text='Reset' type='PRIMARY' onPress={onResetPressed} />
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
