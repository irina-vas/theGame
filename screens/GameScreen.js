import { View, StyleSheet, Text } from 'react-native';
import { CustomTitle } from '../components/ui/CustomTitle';

export const GameScreen = () => {
  return (
    <View style={styles.container}>
      <CustomTitle>Opponent`s guess</CustomTitle>
      <View>
        <Text>Higher or lower</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24
  },
});
  
