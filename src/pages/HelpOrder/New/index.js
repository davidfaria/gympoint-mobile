import React, {useRef, useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {Alert} from 'react-native';
import {Container, SubmitButton, QuestionInput} from './styles';
import Layout from '~/pages/Layout';

import api from '~/services/api';
import {storeHelpOrderRequest} from '../../../store/modules/helpOrder/actions';

export default function New({navigation}) {
  const dispatch = useDispatch();
  const student = navigation.getParam('student');
  const questionInputRef = useRef();
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    questionInputRef.current.focus();
  }, []);

  async function handleSubmit() {
    setLoading(true);
    dispatch(
      storeHelpOrderRequest({
        student_id: student.id,
        question,
      }),
    );
    setQuestion('');
    setLoading(false);
  }

  return (
    <Layout isGoBack={true} page={'List'}>
      <Container>
        <QuestionInput
          textAlignVertical="top"
          placeholder="Inclua seu pedido de auxílio"
          numberOfLines={10}
          multiline={true}
          value={question}
          onChangeText={setQuestion}
          ref={questionInputRef}
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
        />
        <SubmitButton
          loading={loading}
          onPress={handleSubmit}
          label="Enviar pedido"
        />
      </Container>
    </Layout>
  );
}
