import React, {useState} from 'react';
import {TextInput, VStack} from '@react-native-material/core';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
  KeyboardAvoidingView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {useAuth} from '../AuthContext';
const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [_, setUser] = useAuth();

  const handleRegister = () => {
    setIsLoading(true);
    axios({
      method: 'POST',
      url: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp',
      params: {
        key: 'AIzaSyBDn4Tbk_Vr3_LK-PiiDHvQaESVpwfvqog',
      },
      data: {
        email,
        password,
        name,
      },
    })
      .then(res => {
        axios({
          method: 'POST',
          url: 'https://identitytoolkit.googleapis.com/v1/accounts:update',
          params: {
            key: 'AIzaSyBDn4Tbk_Vr3_LK-PiiDHvQaESVpwfvqog',
          },
          data: {
            idToken: res.data.idToken,
            displayName: name,
          },
        })
          .then(r => {
            setUser({...r.data, idToken: res.data.idToken});
          })
          .catch(e => {
            console.log(e, 'update profile error');
            alert(e.message);
          })
          .finally(() => {
            setIsLoading(false);
          });
        console.log(res.data);
      })
      .catch(e => {
        console.warn(e);
        alert(e.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const navigation = useNavigation();
  const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.headBackground}>
          <View>
            <Text style={styles.logoDescription}>Hukuki Hesaplama</Text>
            <Image style={styles.logo} source={require('./assets/logo.png')} />
          </View>
          <View>
            <Text style={styles.register}>Register</Text>
            <Text style={[styles.register, {fontSize: 20}]}>
              Create an account
            </Text>
          </View>
          <KeyboardAvoidingView behavior={'position'}>
            <VStack spacing={1} style={{margin: 20}}>
              <TextInput
                label="Name"
                variant="outlined"
                value={name}
                onChangeText={setName}
              />
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
            </VStack>
            <View style={styles.buttonStyle}>
              <Button
                title="Login Instead"
                variant="text"
                compact
                onPress={handleLogin}
              />
              <Button
                title="Register"
                compact
                onPress={handleRegister}
                loading={isLoading}
              />
            </View>
          </KeyboardAvoidingView>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1d9fd7',
  },
  headBackground: {
    height: 350,
    backgroundColor: '#1d9fd7',
    width: '100%',
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
  register: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  buttonStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 30,
  },
});
export default Register;
