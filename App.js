import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Text, Button, View } from 'react-native';
import { Circles } from './src/Circles';
import { GestureDemo } from './src/GestureDemo';
import { NavigationContainer } from '@react-navigation/native';
import { Lines } from './src/Lines';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Stars } from './src/Stars';
import { Draw } from './src/Draw';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Circles'>
        <Stack.Screen name='Polygons' component={Lines} />
        <Stack.Screen name='Ellipses' component={Circles} />
        {/* <Stack.Screen name='Demo' component={GestureDemo} /> */}
        <Stack.Screen name='SVGStars' component={Stars} />
        <Stack.Screen name='Draw' component={Draw} />
      </Stack.Navigator>
      <StatusBar style='auto' />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
