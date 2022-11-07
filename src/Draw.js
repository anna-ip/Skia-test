import React, { useState } from 'react';
import {
  Button,
  useWindowDimensions,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import {
  Canvas,
  Circle,
  Group,
  Image,
  Path,
  rect,
  RoundedRect,
  rrect,
  useImage,
} from '@shopify/react-native-skia';

const imageSize = 400;
const padding = 24;
const r = 8;

export const Draw = ({ navigation }) => {
  const [paths, setPaths] = useState([]);
  const [activeColorIndex, setActiveColorIndex] = useState(0);
  const { width } = useWindowDimensions('window');
  const paletteOfColors = ['#05E273', '#0C0C91'];
  const image = useImage(require('../assets/anna.jpg'));
  const roundedRect = rrect(
    rect(padding, padding, imageSize - padding * 2, imageSize - padding * 2),
    r,
    r
  );

  if (!image) {
    return null;
  }

  const pan = Gesture.Pan()
    .onStart((g) => {
      const newPaths = [...paths];
      newPaths[paths.length] = {
        segments: [],
        color: paletteOfColors[activeColorIndex],
      };
      newPaths[paths.length].segments.push(`M ${g.x} ${g.y}`);
      setPaths(newPaths);
    })
    .onUpdate((g) => {
      const index = paths.length - 1;
      const newPaths = [...paths];
      if (newPaths?.[index]?.segments) {
        newPaths[index].segments.push(`L ${g.x} ${g.y}`);
        setPaths(newPaths);
      }
    })
    .minDistance(1);

  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <GestureDetector gesture={pan}>
          <SafeAreaView
            style={{
              flex: 1,
            }}
          >
            <Canvas
              style={{
                flex: 1,
              }}
            >
              <Group clip={roundedRect}>
                <Image
                  image={image}
                  x={0}
                  y={0}
                  width={400}
                  height={400}
                  fit='cover'
                />
              </Group>

              {paths.map((path, index) => (
                <Path
                  key={`path-${index}`}
                  path={path.segments.join(' ')}
                  strokeWidth={5}
                  style='stroke'
                  color={path.color}
                />
              ))}
            </Canvas>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              {paletteOfColors.map((c, i) => (
                <TouchableOpacity
                  key={i}
                  onPress={() => setActiveColorIndex(i)}
                >
                  <View
                    style={{
                      backgroundColor: `${c}`,
                      width: 30,
                      height: 30,
                      borderRadius: 15,
                      margin: 5,
                    }}
                  />
                </TouchableOpacity>
              ))}
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <Button
                color='black'
                title='Clear'
                onPress={() => setPaths([])}
              />
              <Button
                title='Go to Polygons'
                color='black'
                onPress={() => navigation.push('Polygons')}
              />
            </View>
          </SafeAreaView>
        </GestureDetector>
      </GestureHandlerRootView>
    </>
  );
};
