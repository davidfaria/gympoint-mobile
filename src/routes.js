import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import SignIn from '~/pages/SignIn';

import Checkin from '~/pages/Checkin';
import HelpOrderList from '~/pages/HelpOrder/List';
import Profile from '~/pages/Profile';

import Answer from '~/pages/HelpOrder/Answer';
import Question from '~/pages/HelpOrder/Question';

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
        }),
        HelpOrder: createSwitchNavigator({
          Answer,
          Question,
        }),
        App: createBottomTabNavigator(
          {
            Checkin,
            HelpOrderList,
            Profile,
          },
          {
            resetOnBlur: true,
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#EE4E62',
              inactiveTintColor: '#999999',
              style: {
                backgroundColor: '#fff',
              },
            },
          },
        ),
      },
      {
        initialRouteName: signedIn ? 'App' : 'Sign',
      },
    ),
  );
