import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

export const InstructionText = ({ children, style }) => {
  return (
    <Text style={[styles.container, style]}>
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  container: {
    color: Colors.yellow,
    fontSize: 24,
    fontFamily: 'EduNSWACTFoundation',
    letterSpacing: 1.5
  }
});
