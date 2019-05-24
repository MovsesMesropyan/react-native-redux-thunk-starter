import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class ContactsScreen extends React.Component {

  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.tabBarInfoText}>Contacts</Text>
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
