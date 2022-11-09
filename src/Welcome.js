import React from 'react';
import { Text, View, Button } from 'react-native';

export const Welcome = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 40, color: 'white' }}>React Native Skia</Text>
      </View>
      <View style={{ flex: 0.1, display: 'flex', alignItems: 'flex-end' }}>
        <Button
          title='Go to Polygons >'
          color='white'
          onPress={() => navigation.push('Polygons')}
          style={{ flex: 1, alignItems: 'flex-end' }}
        />
      </View>
    </View>
  );
};
