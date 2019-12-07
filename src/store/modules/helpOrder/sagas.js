import {takeLatest, call, put, all} from 'redux-saga/effects';
import {Alert} from 'react-native';
import {parseISO, formatRelative} from 'date-fns';
import pt from 'date-fns/locale/pt';
import api from '~/services/api';
import {
  listHelpOrderSucess,
  helpOrderFailure,
  updateHelpOrderAnswered,
} from './actions';

function* listHelpOrders({payload}) {
  try {
    const {shouldRefresh} = payload;

    const res = yield call(
      api.get,
      `/students/${payload.student_id}/help-orders`,
      {
        params: {
          page: payload.page,
        },
      },
    );

    const helpOrders = res.data.data.map(helpOrder => ({
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

    delete res.data.data;
    const pagination = res.data;

    // console.tron.log({helpOrders, pagination, shouldRefresh});

    yield put(listHelpOrderSucess({helpOrders, pagination, shouldRefresh}));
  } catch (error) {
    Alert.alert('Error', 'Erro ao listar os pedidos de ajuda');
    yield put(helpOrderFailure());
  }
}

function* answerNotification({helpOrderAnswered}) {
  helpOrderAnswered.dateFormattedCreatedAt = formatRelative(
    parseISO(helpOrderAnswered.createdAt),
    new Date(),
    {
      locale: pt,
    },
  );

  helpOrderAnswered.dateFormattedAnswerAt = helpOrderAnswered.answer_at
    ? formatRelative(parseISO(helpOrderAnswered.answer_at), new Date(), {
        locale: pt,
      })
    : null;

  yield put(updateHelpOrderAnswered(helpOrderAnswered));
}

export default all([
  takeLatest('@helpOrder/LIST_HELP_ORDER_REQUEST', listHelpOrders),
  takeLatest('@helpOrder/ANSWER_NOTIFICATION', answerNotification),
]);
