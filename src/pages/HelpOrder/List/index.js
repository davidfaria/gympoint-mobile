import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Layout from '~/pages/Layout/index';

import {
  Container,
  OrderList,
  HelpOrderButton,
  Order,
  OrderInfo,
  StatusInfo,
  Status,
  Time,
  Question,
  Loading,
} from './styles';
import {listHelpOrderRequest} from '~/store/modules/helpOrder/actions';

export default function HelperOrderList({navigation}) {
  const student = useSelector(state => state.auth.student);
  const helpOrders = useSelector(state => state.helpOrder.helpOrders);
  const loading = useSelector(state => state.helpOrder.loading);
  const dispatch = useDispatch();

  const [refreshing, setRefreshing] = useState(false);

  async function loadHelpOrders() {
    dispatch(listHelpOrderRequest(student.id));
  }

  async function reload() {
    setRefreshing(true);
    await loadHelpOrders();
    setRefreshing(false);
  }

  useEffect(() => {
    loadHelpOrders();
  }, []);

  return (
    <Layout>
      <Container>
        <HelpOrderButton
          onPress={() => navigation.navigate('Question', {student})}
          label="Novo pedido de auxílio"
        />

        <OrderList
          data={helpOrders}
          keyExtractor={item => String(item.id)}
          onRefresh={reload}
          refreshing={refreshing}
          ListFooterComponent={loading && <Loading />}
          renderItem={({item}) => (
            <Order
              onPress={() => navigation.navigate('Answer', {helpOrder: item})}>
              <OrderInfo>
                <StatusInfo>
                  <Icon
                    name="check-circle"
                    color={item.answer_at ? '#42CB59' : '#999999'}
                    size={19}
                  />
                  <Status answered={item.answer_at}>
                    {item.answer_at ? 'Respondida' : 'Sem Resposta'}
                  </Status>
                </StatusInfo>
                <Time>
                  {item.answer_at
                    ? item.dateFormattedAnswerAt
                    : item.dateFormattedCreatedAt}
                </Time>
              </OrderInfo>
              <Question>{item.question}</Question>
            </Order>
          )}
        />
      </Container>
    </Layout>
  );
}

HelperOrderList.navigationOptions = {
  tabBarLabel: 'Pedir ajuda',
  tabBarIcon: ({tintColor}) => (
    <Icon name="live-help" size={20} color={tintColor} />
  ),
};
