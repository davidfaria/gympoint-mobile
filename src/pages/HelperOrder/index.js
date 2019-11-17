import React from 'react';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Layout from '../Layout/index';

export default function HelperOrder() {
  return (
    <Layout>
      <Text>Help Order</Text>
    </Layout>
  );
}

HelperOrder.navigationOptions = {
  tabBarLabel: 'Pedir ajuda',
  tabBarIcon: ({tintColor}) => (
    <Icon name="live-help" size={20} color={tintColor} />
  ),
};
