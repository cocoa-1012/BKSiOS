import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Image, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import arrowLeft from '../../../assets/img/icons/arrow-left.png';
import logoImg from '../../../assets/img/icons/logo.png';
import {EventDetailsScreen} from '../../pages/eventDetails';
import {HomeScreen} from '../../pages/home';
import {ProfileAuthorScreen} from '../../pages/profileAuthor';
import {CollectionScreen} from '../../pages/collection';
import {ForgetPasswordScreen} from '../../pages/signPage/ForgetPassword';
import {PrivacyScreen} from '../../pages/signPage/privacy';
import {SignInScreen} from '../../pages/signPage/signIn';
import {SignUpScreen} from '../../pages/signPage/signUp';

const HomeStack = createNativeStackNavigator();

export const HomeStackScreen = () => {
  const navigation = useNavigation();
  const Header = ({title}) => {
    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={arrowLeft} />
        </TouchableOpacity>
        <Text style={styles.titleText}>{title}</Text>
        <View style={{width: 60}} />
      </View>
    );
  };

  return (
    <HomeStack.Navigator
      initialRouteName="HomeMain"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#14142f',
        },
      }}>
      <HomeStack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{
          headerTitle: () => <Header title="Sign In" />,
          headerBackVisible: false,
        }}
      />
      <HomeStack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          headerTitle: () => <Header title="Sign Up" />,
          headerBackVisible: false,
        }}
      />
      <HomeStack.Screen
        name="ForgetPassword"
        component={ForgetPasswordScreen}
        options={{
          headerTitle: () => <Header title="Forgot Password" />,
          headerBackVisible: false,
        }}
      />
      <HomeStack.Screen
        name="HomeMain"
        component={HomeScreen}
        options={{
          headerTitle: () => (
            <View style={styles.homeHeaderContainer}>
              <Image source={logoImg} style={{width: 28, height: 28}} />
              <Text style={styles.homeHeaderTitle}>BACKSTAGE</Text>
            </View>
          ),
        }}
      />
      <HomeStack.Screen
        name="EventDetail"
        component={EventDetailsScreen}
        options={{
          headerTitle: () => <Header title="Item" />,
          headerBackVisible: false,
        }}
      />
      <HomeStack.Screen
        name="AuthorProfile"
        component={ProfileAuthorScreen}
        options={{
          headerTitle: () => <Header title="Profile" />,
          headerBackVisible: false,
        }}
      />
      <HomeStack.Screen
        name="Collection"
        component={CollectionScreen}
        options={{
          headerTitle: () => <Header title="Collection" />,
          headerBackVisible: false,
        }}
      />
      <HomeStack.Screen name="Privacy" component={PrivacyScreen} />
    </HomeStack.Navigator>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  titleText: {
    fontFamily: 'SpaceGrotesk-Medium',
    color: '#fff',
    fontSize: 20,
    marginLeft: 10,
    fontWeight: '700',
    textAlign: 'right',
    letterSpacing: 1.03,
  },
  homeHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  homeHeaderTitle: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
    fontWeight: '600',
  },
});
