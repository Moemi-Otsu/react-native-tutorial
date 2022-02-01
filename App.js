import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, ScrollView, View, TextInput, Button } from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <View>
        <Text>Some text</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{ width:200, height: 200 }}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue='You can type in me'
      />
    </ScrollView>
  );
}

export default App;