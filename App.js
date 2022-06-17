import React, {Component} from 'react';
import Login from './src1/Login';
import Register from './src1/Register';
import Profile from './src1/Profile';
import Home from './src1/Home';
import AuthProvider, {useAuth} from './AuthContext';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Navigator = () => {
  const [user] = useAuth();
  if (!user) {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    );
  }
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => <AntDesign name="home" />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => <AntDesign name="user" />,
        }}
      />
    </Tab.Navigator>
  );
};

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <AuthProvider>
          <Navigator />
        </AuthProvider>
      </NavigationContainer>
    );
  }
}
