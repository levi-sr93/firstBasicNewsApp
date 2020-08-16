import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Card = () => {
  return (
    <View style={styles.card}>
      <View style={styles.imageWrapper}>
        <Image
          source={require('../../assets/letsgo.jpg')}
          style={styles.headerImage}
        />

        {/* <Image
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png'
          }}
        /> */}
      </View>

      <View style={styles.titleWrapper}>
        <Text style={styles.titleText}>Dummy Title</Text>
        <MaterialIcons name="favorite-border" color="#72bcd4" size={24} />
      </View>

      <View style={styles.descriptionWrapper}>
        <Text style={styles.descriptionText}>Dummy description</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    height: 300,
    margin: 20,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 8,
    elevation: 5
  },
  imageWrapper: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden'
  },
  headerImage: {
    height: '100%',
    width: '100%'
  },
  titleWrapper: {
    height: '10%',
    marginTop: 20,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  titleText: {
    fontFamily: 'Ubuntu-Bold',
    fontSize: 20,
    marginTop: 10
  },
  descriptionText: {
    fontFamily: 'Ubuntu',
    fontSize: 15,
    marginTop: 10
  },
  descriptionWrapper: {
    paddingHorizontal: 15
  }
});

export default Card;
