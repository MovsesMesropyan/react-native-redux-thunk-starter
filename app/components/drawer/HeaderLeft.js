import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {connect} from 'react-redux';
import {CssColor, ButtonColor} from '../../styles/CssColor';
import { Ionicons } from '@expo/vector-icons';


const HeaderLeft = ({navigation, backButtonVisible}) => {
	return (
		<View style={styles.container}>
			{backButtonVisible ?
				<Ionicons name="md-arrow-back"
					color={ButtonColor.SMOKY}
					size={32}
					style={styles.leftIcon}
					onPress={() => navigation.goBack()} /> :
				<Ionicons name="md-menu"
						  color={ButtonColor.SMOKY}
						  size={32}
						  style={styles.leftIcon}
						  onPress={() => navigation.toggleDrawer()} />
			}
		</View>
	);
};

export default HeaderLeft;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
	},
	leftIcon: {
		marginHorizontal: 15,
	},
});
