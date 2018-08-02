/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import RNImagePicker from 'react-native-image-picker';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  state = {
    uri: ""
  };

  openPicker = () => {
    RNImagePicker.showImagePicker({}, res => {
      if (res.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else {
        let source = { uri: res.uri };
        this.setState(source);
      }
    });
  };

  upload = () => {};

  render() {
    return (
      <View style={styles.container}>
        <Image source={{ uri: this.state.uri }} style={styles.image} />
        <TouchableOpacity style={styles.button} onPress={this.openPicker}>
          <Text>Open</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.upload}>
          <Text>Send</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  image: {
    width: '100%',
    height: 200,
    backgroundColor: '#eee',
  },
  button: {
    padding: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
