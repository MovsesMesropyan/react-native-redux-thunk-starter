import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class AboutScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.tabBarInfoText}>About</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  }
});
