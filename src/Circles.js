import {
  Circle,
  Canvas,
  Group,
  Oval,
  center,
} from '@shopify/react-native-skia';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';

export const Circles = ({ navigation }) => {
  const { width } = useWindowDimensions('window');
  return (
    <SafeAreaView
      style={{
        flex: 1,
        borderColor: 'green',
        borderWidth: '1px',
      }}
    >
      <Canvas style={{ flex: 1, backgroundColor: 'black' }}>
        <Group blendMode='multiply'>
          <Circle
            cx={155}
            cy={190}
            color='magenta'
            r={150}
            style='stroke'
            strokeWidth={48}
          />
          <Oval x={270} y={65} width={128} height={256} color='orange' />
          <Circle cx={200} cy={400} color='cyan' r={100} />
          <Circle cx={295} cy={360} color='lightgreen' r={80} />
          <Circle
            cx={300}
            cy={500}
            color='yellow'
            r={75}
            style='stroke'
            strokeWidth={68}
          />
          <Circle
            cx={130}
            cy={520}
            color='pink'
            r={125}
            style='stroke'
            strokeWidth={68}
          />
          <Group transform={[{ rotate: Math.PI / 3 }]}>
            <Oval x={630} y={0} width={128} height={256} color='lightblue' />
          </Group>
        </Group>
      </Canvas>
      <View style={{ display: 'flex', alignItems: 'flex-end' }}>
        <Button
          color='black'
          title='Go to Animations'
          onPress={() => navigation.push('Animation')}
        />
      </View>
    </SafeAreaView>
  );
};
