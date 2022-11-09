import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {
  Canvas,
  center,
  Group,
  Path,
  Points,
  Skia,
  vec,
} from '@shopify/react-native-skia';

export const Lines = ({ navigation }) => {
  const { width } = useWindowDimensions('window');

  const path = Skia.Path.Make();
  path.moveTo(300, 200); //M {xCoordinate} {yCoordinate} tell the canvas to “move to”
  path.lineTo(200, 300); //L {xCoordinate} {yCoordinate} tell the canvas to draw a line from its current position to the coordinates provided

  const points = [
    vec(128, 0),
    vec(168, 80),
    vec(256, 93),
    vec(192, 155),
    vec(207, 244),
    vec(128, 202),
    vec(49, 244),
    vec(64, 155),
    vec(0, 93),
    vec(88, 80),
    vec(128, 0),
  ];

  return (
    <SafeAreaView
      style={{
        flex: 1,
        width,
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: 'black',
          justifyContent: 'center',
        }}
      >
        <Canvas
          style={{
            flex: 0.7,
          }}
        >
          <Path
            path={'M 100 100 L 300 300'}
            strokeWidth={3}
            color='orange'
            style='stroke'
          />
          <Path
            path={
              'M140 20C73 20 20 74 20 140c0 135 136 170 228 303 88-132 229-173 229-303 0-66-54-120-120-120-48 0-90 28-109 69-19-41-60-69-108-69z'
            }
            color='magenta'
            style='stroke'
            strokeWidth={2}
          />
          <Points
            points={points}
            mode='polygon'
            color='white'
            style='stroke'
            strokeWidth={4}
          />
          <Path path={path} strokeWidth={2} color='green' style='stroke' />
        </Canvas>
      </View>
      <View
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          backgroundColor: 'white',
        }}
      >
        <Button
          color='black'
          title='Go to SVG stars'
          onPress={() => navigation.push('SVGStars')}
        />
      </View>
    </SafeAreaView>
  );
};
