import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

export const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.yellow,
    oadding: 24,
    borderRadius: 8,
    margin: 24,
    alignItems: 'center',
    justifyContent: 'center'
  },
  number: {
    color: Colors.yellow,
    fontSize: 36,
    fontWeight: 'bold'
  }
});