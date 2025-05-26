import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Tickets() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Favorites</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#f0f0f0',
  },
  box: {
    width: '45%',
    height: 100,
    backgroundColor: '#4e9fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  boxText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
