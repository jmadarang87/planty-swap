import React from 'react';
import CustomButton from '../../components/CustomButton';

const SocialSignInButtons = () => {
	const onSignInFacebookPressed = () => {
		console.warn('Sign In with Facebook');
	};

	const onSignInApplePressed = () => {
		console.warn('Sign In with Apple');
	};

	const onSignInGooglePressed = () => {
		console.warn('Sign In with Google');
	};
	return (
		<>
			<CustomButton
				text='Sign In with Facebook'
				onPress={onSignInFacebookPressed}
				bgColor='#E7EAF4'
				fgColor='#4765A9'
			/>
			<CustomButton
				text='Sign In with Apple'
				onPress={onSignInApplePressed}
				bgColor='#e3e3e3'
				fgColor='#363636'
			/>
			<CustomButton
				text='Sign In with Google'
				onPress={onSignInGooglePressed}
				bgColor='#FAE9EA'
				fgColor='#DD4D44'
			/>
		</>
	);
};

export default SocialSignInButtons;
