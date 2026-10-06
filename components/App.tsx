import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import MainScreen from './MainScreen';
import Volunteer from './Volunteer';
import Booking from './Bookings';
import Membership from './Membership';
import Gallery from './Gallery';

type TabParamList = {
  Home: undefined;
  Volunteer: undefined;
  Booking: undefined;
  Membership: undefined;
  Gallery: undefined;
};

const Tab = createMaterialTopTabNavigator<TabParamList>();

export default function App() {
  return (
    <NavigationContainer>

      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            marginTop: 70,
          },
        }}
      >

        <Tab.Screen
          name="Home"
          component={MainScreen}
        />

        <Tab.Screen
          name="Volunteer"
          component={Volunteer}
        />

        <Tab.Screen
          name="Booking"
          component={Booking}
        />

        <Tab.Screen
          name="Membership"
          component={Membership}
        />

        <Tab.Screen
          name="Gallery"
          component={Gallery}
        />

      </Tab.Navigator>

    </NavigationContainer>
  );
}