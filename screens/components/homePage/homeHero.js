import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';

export const HomeHero = ({navigation}) => {
  const userInfo = useSelector(state => state.userInfoReducer).userInfo;

  return (
    <View style={styles.container}>
      <View style={styles.homeTitleContainer}>
        <Text style={styles.homeTitle}>Welcome to the</Text>
        <Text style={styles.homeTitle}>Backstage events NFT</Text>
        <Text style={styles.homeTitle}>marketplace</Text>
      </View>
      <View style={styles.homeTitleContainer}>
        <Text style={styles.homeDesc}>A decentralized Ecosystem powering</Text>
        <Text style={styles.homeDesc}>the events industry</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Explore')}>
          <Text style={styles.buttonText}>Explore</Text>
        </TouchableOpacity>
        {!userInfo && (
          <TouchableOpacity
            style={styles.signButton}
            onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
    minHeight: 330,
  },
  homeTitleContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 10,
  },
  homeTitle: {
    fontFamily: 'SpaceGrotesk-Medium',
    fontSize: 24,
    lineHeight: 28,
    fontWeight: '700',
    color: '#fff',
  },
  homeDesc: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 0.66)',
    fontFamily: 'SpaceGrotesk-Medium',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'SpaceGrotesk-Medium',
    lineHeight: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 2.0,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 124,
    height: 44,
    backgroundColor: '#6a4dfd',
    borderRadius: 4,
  },
  signButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 124,
    height: 44,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.66)',
    borderRadius: 4,
    marginLeft: 10,
  },
});
