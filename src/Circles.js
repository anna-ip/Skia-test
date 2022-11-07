import { Circle, Canvas, Group, Oval } from '@shopify/react-native-skia';
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
          <Circle cx={200} cy={400} color='cyan' r={100} />
          <Circle cx={155} cy={190} color='magenta' r={150} />
          <Circle cx={295} cy={360} color='lightgreen' r={80} />
          <Oval x={10} y={200} width={128} height={256} color='orange' />
          <Circle cx={300} cy={500} color='yellow' r={75} />
          <Circle cx={130} cy={520} color='pink' r={125} />
          <Oval x={250} y={45} width={128} height={256} color='lightblue' />
        </Group>
      </Canvas>
      <View style={{ display: 'flex', alignItems: 'flex-end' }}>
        <Button
          color='black'
          title='Go to Draw'
          onPress={() => navigation.push('Draw')}
        />
      </View>
    </SafeAreaView>
  );
};
