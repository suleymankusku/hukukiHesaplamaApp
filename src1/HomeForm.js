import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class HomeForm extends Component {
  render() {
    const {source, text, onPress} = this.props;
    return (
      <View style={styles.box}>
        <TouchableOpacity onPress={onPress}>
          <Image style={styles.logo} source={source} />
          <Text style={{textAlign: 'center', fontSize: 15}}>{text}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: '20%',
    backgroundColor: '#3FF',
    flex: 1,
    justifyContent: 'center',
  },
  box: {
    marginHorizontal: 15,
    marginBottom: 45,
    margin: 15,
    width: 100,
    height: 100,
  },
  logo: {
    width: '100%',
    height: '80%',
  },
});
