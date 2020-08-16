import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: Platform.OS === 'android' ? '#72bcd4' : '#333',
    padding: 15,
    borderBottomColor: Platform.OS === 'android' ? '#72bcd4' : '#fff',
    borderBottomWidth: 1
  },
  title: {
    marginTop: 14,
    textAlign: 'center',
    fontSize: 20,
    color: '#fff'
  }
});

export default Header;
