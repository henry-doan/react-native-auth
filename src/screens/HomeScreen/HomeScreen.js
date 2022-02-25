import React from 'react';
import { View, Text } from 'react-native';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { Auth } from 'aws-amplify';

const Home = () => {

  const navigation = useNavigation();

  const onSignOutPressed = async () => {
    try {
      // validate user
      const res = await Auth.signOut();
      console.log(res)
      // navigation.navigate('SignIn');
    } catch (e) {
      console.log(e)
      Alert.alert('Oops', e.message);
    }
  }

  return (
    <View>
      <Text style={{ fontSize: 24, alignSelf: 'center' }}>
        Home Screen
      </Text>
      <Text
        onPress={onSignOutPressed}
        style={{
          width: '100%',
          textAlign: 'center',
          color: 'red',
          marginTop: 'auto',
          marginVertical: 20,
          fontSize: 20,
        }}
      >
        Logout
      </Text>
    </View>
  )
}

export default Home;