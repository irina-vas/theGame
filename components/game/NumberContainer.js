import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../constants/colors';

export const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{children}</Text>
    </View>
  )
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.yellow,
    paddingHorizontal: deviceWidth < 380 ? 12 : 24,
    paddingVertical: deviceWidth < 380 ? 6 : 12,
    borderRadius: 8,
    margin: 24,
    alignItems: 'center',
    justifyContent: 'center'
  },
  number: {
    color: Colors.yellow,
    fontSize: deviceWidth < 380 ? 12 : 36,
    fontFamily: 'EduNSWACTFoundation-bold'
  }
});