import React from 'react';
import { View, ImageBackground, StyleSheet, SafeAreaView, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Import your screens (replace with actual paths to your screens)
import HomeScreen from './screens/HomeScreen';
import Tickets from './screens/Tickets';
import Schedules from './screens/Schedules';
import Favorites from './screens/Favorites';
import Pass from './screens/Pass';
import Settings from './screens/Settings';
import Alerts from './screens/Alerts';

const backgroundImg = require('../assets/images/cp.jpeg'); // Replace with actual image path

const Stack = createStackNavigator();

function BoxWrapper({ children }) {
  return (
    <View style={styles.box}>
      {children}
    </View>
  );
}

export default function App() {
  return (
      <ImageBackground
        source={backgroundImg}
        style={styles.background}
        resizeMode="cover"
      >
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false, // Hide the header (no more "Index" showing)
          }}
        >
          <Stack.Screen
            name="Home"
            component={() => (
              <BoxWrapper>
                <HomeScreen />
              </BoxWrapper>
            )}
          />
          <Stack.Screen
            name="Settings"
            component={() => (
              <BoxWrapper>
                <Settings />
              </BoxWrapper>
            )}
          />
          <Stack.Screen
            name="Alerts"
            component={() => (
              <BoxWrapper>
                <Alerts />
              </BoxWrapper>
            )}
          />
          <Stack.Screen
            name="Tickets"
            component={() => (
              <BoxWrapper>
                <Tickets />
              </BoxWrapper>
            )}
          />
          <Stack.Screen
            name="Schedules"
            component={() => (
              <BoxWrapper>
                <Schedules />
              </BoxWrapper>
            )}
          />
          <Stack.Screen
            name="Favorites"
            component={() => (
              <BoxWrapper>
                <Favorites />
              </BoxWrapper>
            )}
          />
          <Stack.Screen
            name="Pass"
            component={() => (
              <BoxWrapper>
                <Pass />
              </BoxWrapper>
            )}
          />
        </Stack.Navigator>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  box: {
    flex: 1, // Make the box take up all available space
    width: '100%', // Adjust this to control the width of the boxes
    padding: 20,
    marginTop: 20, // Adjust top margin if needed to give space from the top
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.0)', // Semi-transparent background
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5, // for Android shadow
    justifyContent: 'center', // Vertically center the content inside the box
    alignItems: 'center', // Horizontally center the content inside the box
  },
});
