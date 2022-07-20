import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';
import { Colors } from '../../constants/colors';

export const CustomTitle = ({ children }) => {
  console.log('Platform', Platform.OS)
  return (
    <Text style={styles.titleContainer}>
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    fontFamily: 'EduNSWACTFoundation-bold',
    fontSize: 24,
    // borderWidth: Platform.OS === 'android' ? 3 : 2,
    borderWidth: Platform.select({ ios: 1, android: 2 }),
    borderColor: Colors.white,
    textAlign: 'center',
    padding: 12,
    color: Colors.white,
    letterSpacing: 2,
    maxWidth: '80%',
    width: 300,
    alignSelf: 'center'
  },
});
