import React, {useRef, useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {Container, SubmitButton, QuestionInput} from './styles';
import Layout from '~/pages/Layout';

import api from '~/services/api';

export default function Question({navigation}) {
  const student = navigation.getParam('student');
  const questionInputRef = useRef();
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    questionInputRef.current.focus();
  }, []);

  async function handleSubmit() {
    try {
      setLoading(true);
      await api.post(`/students/${student.id}/help-orders`, {
        question,
      });

      Alert.alert('Sucesso', 'Pedido de auxílio enviado');
      setQuestion('');
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  }

  return (
    <Layout isGoBack={true} page={'HelpOrderList'}>
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
