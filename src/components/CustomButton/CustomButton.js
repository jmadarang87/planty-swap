import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

const CustomButton = ({
	onPress,
	text,
	type = 'PRIMARY',
	bgColor,
	fgColor,
}) => {
	// const { height } = useWindowDimensions();

	return (
		<Pressable
			onPress={onPress}
			style={[
				styles.container,
				styles[`container_${type}`],
				bgColor ? { backgroundColor: bgColor } : {},
			]}
		>
			<Text style={[styles[`text_${type}`], fgColor ? { color: fgColor } : {}]}>
				{text}
			</Text>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		maxWidth: 525,

		padding: 15,
		marginVertical: 5,

		alignItems: 'center',
		borderRadius: 5,
	},

	container_PRIMARY: {
		backgroundColor: '#3B71f3',
	},
	container_SECONDARY: {
		borderColor: '#3B71f3',
		borderWidth: 2,
	},
	container_TERTIARY: {},

	text_PRIMARY: {
		fontWeight: 'bold',
		color: 'white',
		textTransform: 'uppercase',
	},
	text_SECONDARY: {
		color: '#3B71f3',
	},
	text_TERTIARY: {
		color: 'gray',
	},
});

export default CustomButton;
