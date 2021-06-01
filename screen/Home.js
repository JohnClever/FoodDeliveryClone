import React from 'react';
import { View, Text } from 'react-native';
import { FONTS, SIZES, COLORS } from '../constant';
const Home = () => {
	return (
		<View
			style={{
				width: SIZES.width,
				height: SIZES.height,
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Text>Yay!!!</Text>
		</View>
	);
};

export default Home;
