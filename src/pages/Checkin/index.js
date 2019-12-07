import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Layout from '../Layout/index';

import {
  Container,
  CheckinButton,
  CheckinList,
  CheckinInfo,
  Label,
  Time,
} from './styles';
import {
  listCheckinRequest,
  checkinRequest,
} from '../../store/modules/checkin/actions';

export default function Checkin() {
  const dispatch = useDispatch();
  const student = useSelector(state => state.auth.student);
  const checkins = useSelector(state => state.checkin.checkins);
  const [refreshing, setRefreshing] = useState(false);

  async function loadCheckins() {
    dispatch(listCheckinRequest(student.id));
  }

  useEffect(() => {
    loadCheckins();
  }, []);

  function handleNewCheckin() {
    dispatch(checkinRequest(student.id));
  }

  async function reload() {
    setRefreshing(true);
    await loadCheckins();
    setRefreshing(false);
  }

  return (
    <Layout>
      <Container>
        <CheckinButton onPress={handleNewCheckin} label="Novo check-in" />

        <CheckinList
          onRefresh={reload}
          refreshing={refreshing}
          data={checkins}
          keyExtractor={item => String(item._id)}
          renderItem={({item, index}) => (
            <CheckinInfo>
              <Label>Check #{index + 1}</Label>
              <Time>{item.dateFormatted}</Time>
            </CheckinInfo>
          )}
        />
      </Container>
    </Layout>
  );
}

Checkin.navigationOptions = {
  tabBarLabel: 'Check-ins',
  tabBarIcon: ({tintColor}) => (
    <Icon name="edit-location" size={20} color={tintColor} />
  ),
};
