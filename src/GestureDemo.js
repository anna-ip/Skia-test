import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import { Canvas, center, Path, Skia } from '@shopify/react-native-skia';

export const GestureDemo = ({ navigation }) => {
  const [gestureStart, setGestureStart] = useState();
  const [gestureMove, setGestureMove] = useState();
  const [gestureUpdate, setGestureUpdate] = useState();
  const [gestureEnd, setGestureEnd] = useState();

  const { width } = useWindowDimensions('window');

  const pan = Gesture.Pan()
    .onStart((g) => {
      setGestureStart(`${Math.round(g.x)}, ${Math.round(g.y)}`);
    })
    .onTouchesMove((g) => {
      setGestureMove(
        `${Math.round(g.changedTouches[0].x)}, ${Math.round(
          g.changedTouches[0].y
        )}`
      );
    })
    .onUpdate((g) => {
      setGestureUpdate(`${Math.round(g.x)}, ${Math.round(g.y)}`);
    })
    .onEnd((g) => {
      setGestureEnd(`${Math.round(g.x)}, ${Math.round(g.y)}`);
    });

  console.log(gestureStart, gestureMove, gestureEnd);

  return (
    <>
      <GestureHandlerRootView style={{ flex: 1, paddingBottom: 15 }}>
        <GestureDetector gesture={pan}>
          <SafeAreaView
            style={{
              flex: 1,
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text
              style={{ color: 'black', fontSize: 24, marginBottom: 5 }}
            >{`Gesture started at:  ${gestureStart}`}</Text>
            <Text
              style={{ color: 'black', fontSize: 24, marginBottom: 5 }}
            >{`Gesture moved to:  ${gestureMove}`}</Text>
            <Text
              style={{ color: 'black', fontSize: 24, marginBottom: 5 }}
            >{`Gesture updated to:  ${gestureUpdate}`}</Text>
            <Text
              style={{ color: 'black', fontSize: 24, marginBottom: 5 }}
            >{`Gesture ended at:  ${gestureEnd}`}</Text>
          </SafeAreaView>
        </GestureDetector>
        <View style={{ display: 'flex', alignItems: 'flex-end' }}>
          <Button
            color='black'
            title='Go to Stars'
            onPress={() => navigation.push('SVGStars')}
          />
        </View>
      </GestureHandlerRootView>
    </>
  );
};
