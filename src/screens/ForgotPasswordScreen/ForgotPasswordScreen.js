import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import Logo from '../../../assets/images/Logo.png';
import CustomInput from '../../components/CustomInputs';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { Auth } from 'aws-amplify';

const ForgotPasswordScreen = () => {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const onForgotPasswordPressed = async () => {
    if (loading) {
      return;
    }
    
    setLoading(true);
    
    try {
      const res = await Auth.forgotPassword(username)
      console.log(res)
      navigation.navigate('NewPassword', {username});
      setUsername('')
    } catch (e) {
      Alert.alert('Oops', e.message);
    }

    setLoading(false);
  }

  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image 
          source={Logo} 
          style={[styles.logo, { height: height * 0.3}]} 
          resizeMode="contain" 
        />
        <Text style={styles.title}>Forget Your Password</Text>
        <CustomInput 
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomButton
          text="Send"
          onPress={onForgotPasswordPressed}
        />
        <CustomButton
          text="Back to Sign In"
          onPress={onSignInPressed}
          type="Tertiary"
        />
      </View>
    </ScrollView>
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  }, 
  link: {
    color: '#FD8075'
  }
})

export default ForgotPasswordScreen;