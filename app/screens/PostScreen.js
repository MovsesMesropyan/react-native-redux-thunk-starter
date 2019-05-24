import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
	ScrollView,
} from 'react-native';
import { getPostDetails } from '../store/actions';
import {CssColor, TextColor} from '../styles/CssColor';

class PostScreen extends Component {
	componentDidMount() {
		const itemId = this.props.navigation.state.params.itemId || null;
		if(itemId) {
			this.props.onGetPost(itemId);
		}
	}

	render() {
		const { post, loading } = this.props;

		if(loading) {
			return (
				<View style={styles.flexContainer}>
					<Text style={styles.loading}>Loading...</Text>
				</View>
			);
		}

		return (
			<View style={styles.container}>
				<Text style={styles.postTitle}>{post.title}</Text>
				<ScrollView>
					<Text style={styles.postBody}>{post.body}</Text>
				</ScrollView>
			</View>
		);
	}
}

const mapStateToProps = state => {
	return {
		post: state.posts.postDetails,
		loading: state.posts.postDetailsIsLoading
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onGetPost: id => dispatch(getPostDetails(id))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PostScreen);

const styles = StyleSheet.create({
	flexContainer: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		backgroundColor: CssColor.WHITE,
	},
	loading: {
		textAlign: 'center',
		fontSize: 30,
		color: TextColor.SMOKY,
	},
	container: {
		backgroundColor: '#fff',
	},
	postTitle: {
		fontSize: 30,
		fontWeight: 'bold',
		color: TextColor.SMOKY,
		paddingHorizontal: 20,
		marginVertical: 20,
	},
	postBody: {
		fontSize: 18,
		color: TextColor.SMOKY,
		paddingHorizontal: 20,
	}
});
