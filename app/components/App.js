

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Dimensions,
  TextInput,
  Alert,
} from 'react-native';

var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;


export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = { text: 'Username' ,text1:'password'};
  }
  _onPress() {
    Alert.alert('chummaaaaaaaaaa!');
   }
  render() {
    return (
      <View style={styles.container}>
        <Image
           style={styles.stretch}
           source={require('./img/alan.png')}
         />
        <TextInput
          style={styles.text}
          onChangeText={(text) => this.setState({text})}
          placeholder="Username"
          placeholderTextColor="black"
        />
        <TextInput
          style={styles.text}
          placeholder="password"
          placeholderTextColor="black"
          secureTextEntry={true}
          onChangeText={(text) => this.setState({text})}

        />
        <Button
            onPress={this._onPress}
            title="login"
            color="black"
            accessibilityLabel="Learn more about this purple button"
        />
    </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width:width,
    height: height,
    backgroundColor: '#f1c40f',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'center',
  },
  text:{
    height: 40,
    borderColor: 'white',
    margin:20,
    color:'white',
    borderBottomColor: 'white',
    width:width/1.3,
  },
  title:{
    fontSize:30,
    fontWeight:'900',
    justifyContent:'center',
    color:'#c4152f',
    alignItems:'center',
  },
  stretch: {
    width: 210,
    height: 200
  },
});
