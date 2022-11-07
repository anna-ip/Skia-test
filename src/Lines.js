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
      <Canvas style={{ flex: 1, backgroundColor: 'black' }}>
        <Points
          points={points}
          mode='polygon'
          color='white'
          style='stroke'
          strokeWidth={4}
        />
        <Path
          path={'M 100 100 L 300 300'}
          strokeWidth={2}
          color='orange'
          style='stroke'
        />
        <Path path={path} strokeWidth={2} color='green' style='stroke' />
      </Canvas>
      <View style={{ display: 'flex', alignItems: 'flex-end' }}>
        <Button
          color='black'
          title='Go to SVG stars'
          onPress={() => navigation.push('SVGStars')}
        />
      </View>
    </SafeAreaView>
  );
};
