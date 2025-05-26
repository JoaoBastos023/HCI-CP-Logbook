// screens/HomeScreen.tsx
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {['Settings', 'Alerts', 'Tickets','Schedules','Favorites','Pass'].map((page, index) => (
        <TouchableOpacity
          key={page}
          style={styles.box}
          onPress={() => navigation.navigate(page as never)}
        >
          <Text style={styles.boxText}>{page}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  box: {
    width: '45%',
    height: '20%',
    backgroundColor: 'rgba(15, 143, 3, 0.8)',
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
