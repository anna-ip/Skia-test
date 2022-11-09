import React, { useState } from 'react';
import {
  Canvas,
  Group,
  Oval,
  RadialGradient,
  Circle,
  Paint,
  SweepGradient,
  vec,
  useSpring,
  Rect,
} from '@shopify/react-native-skia';
import { Text, Button, View, Dimensions, Pressable } from 'react-native';

const { width } = Dimensions.get('screen');

export const Animation = ({ navigation }) => {
  const [toggled, setToggled] = useState(false);
  const position = useSpring(toggled ? width - 80 : 50);
  return (
    <View
      style={{
        flex: 1,
        paddingBottom: 50,
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}
      >
        <Canvas
          style={{
            flex: 0.3,
            alignContent: 'center',
          }}
        >
          <Group blendMode='multiply'>
            <Oval
              strokeWidth={10}
              style='stroke'
              x={0}
              y={100}
              width={width}
              height={50}
              color='#9F5EE2'
            />
            <Oval x={position} y={100} width={50} height={50}>
              <Paint>
                <RadialGradient
                  c={vec(100, 120)}
                  r={50}
                  colors={[
                    '#3FCEBC',
                    '#3CBCEB',
                    '#5F96E7',
                    '#816FE3',
                    '#9F5EE2',
                    '#816FE3',
                    '#5F96E7',
                    '#3CBCEB',
                    '#3FCEBC',
                  ]}
                />
              </Paint>
            </Oval>
          </Group>
        </Canvas>
        <Pressable
          title=''
          onPress={() => setToggled((p) => !p)}
          style={{
            borderWidth: 1,
            borderColor: 'black',
            width: 100,
            padding: 10,
            alignSelf: 'center',
            marginTop: 30,
          }}
        >
          <Text style={{ color: 'black', textAlign: 'center' }}>Toggle</Text>
        </Pressable>
      </View>
      <View
        style={{
          display: 'flex',
          alignItems: 'flex-end',
        }}
      >
        <Button
          color='black'
          title='Go to Draw'
          onPress={() => navigation.push('Draw')}
        />
      </View>
    </View>
  );
};
