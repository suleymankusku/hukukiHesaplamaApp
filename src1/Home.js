import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import HomeForm from './HomeForm';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <HomeForm
            source={require('./assets/worker.png')}
            text={'İşçi Alacakları Hesaplama'}
          />
          <HomeForm
            source={require('./assets/prison.png')}
            text={'Cezaların Toplanması'}
          />
          <HomeForm
            source={require('./assets/hammer.png')}
            text={'İnfaz Hesaplama'}
          />
        </View>
        <View>
          <HomeForm
            source={require('./assets/lawyer.png')}
            text={'Vekalet ücreti Hesaplama'}
          />
          <HomeForm
            source={require('./assets/add-file.png')}
            text={'Cezaların Toplanması'}
          />
          <HomeForm
            source={require('./assets/cheque.png')}
            text={'Serbest Meslek Makbuz Hes.'}
          />
        </View>
        <View>
          <HomeForm
            source={require('./assets/organization-chart.png')}
            text={'Miras Hesaplama'}
          />
          <HomeForm
            source={require('./assets/tax.png')}
            text={'Faiz Hesaplama'}
          />
          <HomeForm
            source={require('./assets/accounting.png')}
            text={'İcra Dosyası Borç Hes.'}
          />
        </View>
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
});
