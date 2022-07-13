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

const ConfirmEmailScreen = () => {
	const [email, setEmail] = useState('');
	const [confirmationCode, setConfirmationCode] = useState('');

	const { height } = useWindowDimensions();

	const navigation = useNavigation();

	const onConfirmPressed = () => {
		console.warn('Email Confirmed');
	};

	const onResendCodePressed = () => {
		console.warn('Code Resent');
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
				<Text style={styles.title}>Confirm Your Email</Text>

				<Text style={styles.label}>Email</Text>
				<CustomInput placeholder='Email' value={email} setValue={setEmail} />
				<Text style={styles.label}>Confirmation Code*</Text>
				<CustomInput
					placeholder='Enter your confirmation code'
					value={confirmationCode}
					setValue={setConfirmationCode}
				/>
				<CustomButton
					text='Confirm'
					type='PRIMARY'
					onPress={onConfirmPressed}
				/>
				<CustomButton
					text='Resend Code'
					type='SECONDARY'
					onPress={onResendCodePressed}
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

export default ConfirmEmailScreen;
