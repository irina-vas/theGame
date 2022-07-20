import React from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

export const CustomButton = ({ children, onPress }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) => pressed
          ? [styles.pressed, styles.buttonInnerContainer]
          : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: Colors.medPlum }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: Colors.plum,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  buttonText: {
    color: Colors.white,
    textAlign: 'center',
    fontFamily: 'EduNSWACTFoundation-bold',
    fontSize: 18,
    letterSpacing: 2
  },
  pressed: {
    opacity: 0.75
  }
});
