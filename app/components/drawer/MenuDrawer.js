import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	ScrollView
} from 'react-native';
import {CssColor, ButtonColor, TextColor} from '../../styles/CssColor';
import { Ionicons } from '@expo/vector-icons';
import {connect} from 'react-redux';
import {logout} from '../../store/actions';

const MenuDrawer = props => {
	const { items, navigation, onLogout } = props;

	return (
		<View style={styles.container} >
			<View style={styles.topContainer}>
				<Ionicons name="md-log-out"
						  color={ButtonColor.SMOKY}
						  size={20}
						  onPress={onLogout} />
			</View>
			<ScrollView>
				{items.map(item => {
					return (
						<TouchableOpacity key={item.key} onPress={() => navigation.navigate(item.routeName)} >
							<Text style={styles.link}>{item.params.drawerLabel}</Text>
						</TouchableOpacity>
					)
				})}
			</ScrollView>
		</View>
	);
}


const mapStateToProps = state => {
	return {
		user: state.auth.user,
		loading: state.auth.loading
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onLogout: user => dispatch(logout(user))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuDrawer);

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	topContainer: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		marginTop: 50,
		marginHorizontal: 20,
		paddingVertical: 10,
		borderBottomWidth: 1,
		borderBottomColor: CssColor.SEMI_SMOKY,
	},

	link: {
		flex: 1,
		fontSize: 20,
		padding: 6,
		paddingLeft: 14,
		margin: 5,
		textAlign: 'left',
		color: TextColor.SMOKY,

	}
});