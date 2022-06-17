import React, {Component} from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import {useAuth} from '../AuthContext';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import Pie from 'react-native-pie';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Profile = () => {
  const [user] = useAuth();
  return (
    <SafeAreaView>
      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Avatar.Image
            source={{
              uri: 'https://api.adorable.io/avatars/80/abott@adorable.png',
            }}
            size={80}
          />
          <View style={{marginLeft: 20}}>
            <Title
              style={[
                styles.title,
                {
                  marginTop: 15,
                  marginBottom: 5,
                },
              ]}>
              {user.displayName}
            </Title>
            <Caption style={styles.caption}>@{user.displayName}</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20} />
          <Text style={{color: '#777777', marginLeft: 20}}>{user.email}</Text>
        </View>
      </View>

      <View
        style={{
          marginTop: '30%',
          paddingVertical: 15,
          flexDirection: 'row',
          width: 350,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Pie
          radius={80}
          sections={[
            {
              percentage: 10,
              color: '#C70039',
            },
            {
              percentage: 20,
              color: '#44CD40',
            },
            {
              percentage: 30,
              color: '#404FCD',
            },
            {
              percentage: 40,
              color: '#EBD22F',
            },
          ]}
          strokeCap={'butt'}
        />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 1050,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
  gauge: {
    position: 'absolute',
    width: 100,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gaugeText: {
    backgroundColor: 'transparent',
    color: '#000',
    fontSize: 24,
  },
});
