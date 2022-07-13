import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const CustomInput = ({ placeholder, value, setValue, secureTextEntry }) => {
	// const { height } = useWindowDimensions();

	return (
		<View style={styles.container}>
			<TextInput
				value={value}
				onChangeText={setValue}
				placeholder={placeholder}
				style={styles.input}
				secureTextEntry={secureTextEntry}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		width: '100%',
		maxWidth: 525,

		borderColor: 'black',
		borderWidth: 1,
		borderRadius: 5,

		paddingHorizontal: 10,
		marginVertical: 5,
		height: 50,
		margin: 10,
	},

	input: {
		backgroundColor: 'white',
		width: '103%',
		height: '100%',
	},
});

export default CustomInput;
