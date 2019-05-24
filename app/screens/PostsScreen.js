import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	ScrollView,
} from 'react-native';
import { getPosts } from '../store/actions';
import {CssColor, TextColor} from '../styles/CssColor';

class PostsScreen extends Component {
  componentDidMount() {
    this.props.onGetPosts();
  }

  render() {
    const { posts, loading } = this.props;

    if(loading) {
      return (
          <View style={styles.flexContainer}>
            <Text style={styles.loading}>Loading...</Text>
          </View>
      );
    }

    return (
      <ScrollView style={styles.container}>
		  {posts.map(post => (
			  <TouchableOpacity style={styles.postContainer} key={post.id} onPress={() => this.props.navigation.navigate('POST_ROUTE', {itemId: post.id, title: post.title})}>
				  <Text style={styles.postTitle}>{post.title}</Text>
				  <Text style={styles.postBody}>{post.body}</Text>
			  </TouchableOpacity>
		  ))}
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts.posts,
    loading: state.posts.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetPosts: () => dispatch(getPosts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsScreen);

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
	postContainer: {
		padding: 10,
		marginHorizontal: 10,
		marginVertical: 5,
		borderWidth: 1,
		borderColor: CssColor.SEMI_SMOKY,
		borderRadius: 5,
		textAlign: 'center',
	},
	postTitle: {
		fontSize: 17,
		color: TextColor.SMOKY,
		fontWeight: 'bold',
		marginBottom: 10,
	},
	postBody: {
		fontSize: 14,
		color: TextColor.SMOKY,
	}
});
