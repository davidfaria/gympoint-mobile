import {takeLatest, call, put, all} from 'redux-saga/effects';

import {Alert} from 'react-native';
import api from '~/services/api';
import {signInSucess, signFailure} from './actions';

export function* singIn({payload}) {
  try {
    const {id} = payload;

    const res = yield call(api.post, 'sessionsStudent', {
      id,
    });

    const student = res.data;

    yield put(signInSucess(student));
  } catch (error) {
    Alert.alert('Falha na autenticação', 'Aluno Não encontrado');
    yield put(signFailure());
  }
}

export function singOut() {}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', singIn),
  takeLatest('@auth/SIGN_OUT', singOut),
]);
