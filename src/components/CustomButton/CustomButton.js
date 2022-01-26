import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const CustomButton = ({ onPress, text, type = "Primary", bgColor, fgColor }) => {
  return (
    <Pressable 
      style={[
        styles.container, 
        styles[`container${type}`],
        bgColor ? { backgroundColor: bgColor } : {} 
      ]}
      onPress={onPress}
    >
      <Text 
        style={[
          styles.text, 
          styles[`text${type}`],
          fgColor ? { color: fgColor } : {}
        ]}
      >
        {text}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    marginVertical: 5, 
    alignItems: 'center',
    borderRadius: 5,
  },
  containerPrimary: {
    backgroundColor: '#3B71F3',
  },
  containerTertiary: {

  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
  textTertiary: {
    color: 'gray',
  },
})

export default CustomButton;