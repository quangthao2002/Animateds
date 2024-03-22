import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Bai1 from './Bai1';
import Bai2 from './Bai2';
import Bai3 from './Bai3';
import Ball from './Bai4';
import Bai5 from './Bai5';
import Bai6 from './Bai6';

export default function App() {
  return (
    <View  style={styles.container} >
      {/* <Bai1/> */}
      {/* <Bai2/> */}
      {/* <Bai3/> */}
      {/* <Ball/> */}
      {/* <Bai5/> */}
      <Bai6/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
