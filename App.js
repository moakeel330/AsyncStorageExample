import React, {useState} from 'react';
import {
	View,
	TextInput, 
	Text, 
	TouchableOpacity, 
	StyleSheet,
} from 'react-native'; 

import AsyncStorage from '@react-native-async-storage/async-storage';

function App(){
	const [textValue, setTextValue] = useState('');
	const [getValue, setGetValue] = useState('');
	
	const fnSaveValue = () => {
		AsyncStorage.setItem('@data', textValue);
	};

	const fnGetValue = () => {
		//const value = await AsyncStorage.getItem('my-key');
		AsyncStorage.getItem('@data').then(
			(value) => setGetValue(value)
		);
	};

	return(
		<View style={styles.container}>
			<Text style={styles.title}>AsyncStorage</Text>
			<TextInput 
				style={styles.input}
				placeholder="Enter something here"
				onChangeText={(data) => setTextValue(data)}
				value={textValue}
			/>
			<TouchableOpacity onPress={fnSaveValue}>
				<View style={styles.button}>
					<Text style={styles.btnText}>SAVE VALUE</Text>
				</View>
			</TouchableOpacity>
			<TouchableOpacity onPress={fnGetValue}>
				<View style={styles.button}>
					<Text style={styles.btnText}>GET/READ VALUE</Text>
				</View>
			</TouchableOpacity>
			<Text style={styles.output}>{getValue}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container:{
		flex: 1,
		padding: 8,
	},
	title: {
		fontSize: 22,
		fontWeight: 'bold',
		textAlign: 'center',
		paddingVertical: 20,
		color: 'green', 
	},
	output: {
		padding: 10, 
		textAlign: 'center',
	},
	button:{
		fontSize: 16, 
		color: '#ffffff',
		backgroundColor: 'green',
		padding: 8,
		marginTop: 32, 
		width: '100%',
	},
	btnText: {
		padding: 5, 
		color: 'white',
		textAlign: 'center',
	},
	input: {
		textAlign: 'center',
		height: 40, 
		width: '100%',
		borderWidth: 1, 
		borderColor: 'orange',
	},
});

export default App; 