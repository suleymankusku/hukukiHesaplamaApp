import React, {useState} from 'react';
import {TextInput, VStack, HStack} from '@react-native-material/core';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {useAuth} from '../AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();
  const handleRegister = () => {
    navigation.navigate('Register');
  };

  const [_, setUser] = useAuth();

  const handleLogin = () => {
    setIsLoading(true);
    axios({
      method: 'POST',
      url: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword',
      params: {
        key: 'AIzaSyBDn4Tbk_Vr3_LK-PiiDHvQaESVpwfvqog',
      },
      data: {
        email,
        password,
      },
    })
      .then(res => {
        setUser(res.data);
      })
      .catch(e => {})
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headBackground}>
        <View>
          <Text style={styles.logoDescription}>Hukuki Hesaplama</Text>
          <Image style={styles.logo} source={require('./assets/logo.png')} />
        </View>

        <View style={[styles.textInput, {margin: 20}]}>
          <TextInput
            label="Email"
            variant="outlined"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            label="Password"
            variant="outlined"
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <View style={styles.buttonStyle}>
          <Button
            title="Register Instead"
            compact
            variant="text"
            onPress={handleRegister}
          />
          <Button title="Login" onPress={handleLogin} loading={isLoading} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  headBackground: {
    height: 350,
    width: '100%',
    backgroundColor: '#1c92c9',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  logo: {
    padding: 60,
    marginTop: 30,
    marginStart: 140,
    width: 100,
    height: 100,
  },
  logoDescription: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color: '#f2f2f2',
  },
  textInput: {
    margin: 20,
    marginStart: 20,
    marginEnd: 20,
  },
  buttonStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 30,
  },
});
export default Login;
