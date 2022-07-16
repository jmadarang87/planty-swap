import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Controller } from 'react-hook-form';

const CustomInput = ({
	control,
	name,
	rules = {},
	placeholder,
	secureTextEntry,
}) => {
	// const { height } = useWindowDimensions();

	return (
		<Controller
			control={control}
			name={name}
			rules={rules}
			render={({
				field: { value, onChange, onBlur },
				fieldState: { error },
			}) => (
				<>
					{error && (
						<Text style={{ color: 'red', alignSelf: 'stretch' }}>
							{error.message ||
								'Uh oh! There was an error with your submission. Please try again.'}
						</Text>
					)}
					<View
						style={[styles.container, { borderColor: error ? 'red' : 'black' }]}
					>
						<TextInput
							value={value}
							onChangeText={onChange}
							onBlur={onBlur}
							placeholder={placeholder}
							style={[styles.input]}
							secureTextEntry={secureTextEntry}
						/>
					</View>
				</>
			)}
		/>
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
		width: '104%',
		height: '100%',
	},
});

export default CustomInput;
