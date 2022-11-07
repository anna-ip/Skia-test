import { Circle, Canvas, Skia, ImageSVG } from '@shopify/react-native-skia';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';

export const Stars = ({ navigation }) => {
  const { width } = useWindowDimensions('window');

  const svgStar =
    '<svg class="star-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/2000/xlink" viewBox="0 0 200 200"><polygon id="star" fill="#fcbf49" points="100,0,129.38926261462365,59.54915028125263,195.10565162951536,69.09830056250526,147.55282581475768,115.45084971874736,158.77852522924732,180.90169943749473,100,150,41.2214747707527,180.90169943749476,52.447174185242325,115.45084971874738,4.894348370484636,69.09830056250527,70.61073738537632,59.549150281252636"></polygon></svg>';
  const svgImage = Skia.SVG.MakeFromString(svgStar);

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <Canvas style={{ flex: 1, backgroundColor: 'white' }}>
        {!!svgImage && (
          <>
            <ImageSVG width={200} height={200} x={100} y={100} svg={svgImage} />
            <ImageSVG width={100} height={100} x={50} y={300} svg={svgImage} />
            <ImageSVG width={300} height={300} x={75} y={350} svg={svgImage} />
          </>
        )}
      </Canvas>
      <View style={{ display: 'flex', alignItems: 'flex-end' }}>
        <Button
          color='black'
          title='Go to Ellipses'
          onPress={() => navigation.push('Ellipses')}
        />
      </View>
    </SafeAreaView>
  );
};
