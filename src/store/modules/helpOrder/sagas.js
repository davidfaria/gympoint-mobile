import {takeLatest, call, put, all} from 'redux-saga/effects';
import {Alert} from 'react-native';
import {parseISO, formatRelative} from 'date-fns';
import pt from 'date-fns/locale/pt';
import api from '~/services/api';
import {listHelpOrderSucess, helpOrderFailure} from './actions';

function* listHelpOrders(payload) {
  try {
    const res = yield call(api.get, `/students/${payload.id}/help-orders`);

    const data = res.data.map(helpOrder => ({
      ...helpOrder,
      dateFormattedCreatedAt: formatRelative(
        parseISO(helpOrder.createdAt),
        new Date(),
        {
          locale: pt,
        },
      ),
      dateFormattedAnswerAt: helpOrder.answer_at
        ? formatRelative(parseISO(helpOrder.answer_at), new Date(), {
            locale: pt,
          })
        : null,
    }));

    yield put(listHelpOrderSucess(data));
  } catch (error) {
    Alert.alert('Error', 'Erro ao listar os pedidos de ajuda');
    yield put(helpOrderFailure());
  }
}

function* helpOrder() {}

export default all([
  takeLatest('@helpOrder/LIST_HELP_ORDER_REQUEST', listHelpOrders),
  takeLatest('@helpOrder/HELP_ORDER_REQUEST', helpOrder),
]);
