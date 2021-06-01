import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './screen';
import Tabs from './navigation/tabs';

const Stack = createStackNavigator();
const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
				initialRouteName={'Home'}
			>
				<Stack.Screen name='Home' component={Tabs} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
