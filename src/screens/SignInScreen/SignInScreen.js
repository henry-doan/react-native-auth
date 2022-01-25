import React from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';
import Logo from '../../../assets/images/Logo.png';

const SignInScreen = () => {
  const { height } = useWindowDimensions();

  return (
    <View style={styles.root}>
      <Image source={Logo} style={[styles.logo, { height: height * 0.3}]} resizeMode="contain" />
      <Text>Sign In Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 300,
  }
})

export default SignInScreen;