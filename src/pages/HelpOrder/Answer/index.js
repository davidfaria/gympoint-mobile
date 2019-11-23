import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Layout from '~/pages/Layout';

import {
  Container,
  Panel,
  QuestionInfo,
  QuestionHeader,
  Title,
  Time,
  Description,
  AnswerInfo,
  AnswerHeader,
} from './styles';

export default function Answer({navigation}) {
  const helpOrder = navigation.getParam('helpOrder');
  return (
    <Layout isGoBack={true} page={'HelpOrderList'}>
      <Container>
        <Panel>
          <QuestionInfo>
            <QuestionHeader>
              <Title>PERGUNTA</Title>
              <Time>{helpOrder.dateFormattedCreatedAt}</Time>
            </QuestionHeader>
            <Description>{helpOrder.question}</Description>
          </QuestionInfo>

          <AnswerInfo>
            <AnswerHeader>
              <Title>RESPOSTA</Title>
              <Time>{helpOrder.dateFormattedAnswerAt}</Time>
            </AnswerHeader>

            <Description>{helpOrder.answer}</Description>
          </AnswerInfo>
        </Panel>
      </Container>
    </Layout>
  );
}

Answer.navigationOptions = {
  tabBarLabel: 'Check-in',
  tabBarIcon: ({tintColor}) => (
    <Icon name="live-help" size={20} color={tintColor} />
  ),
};
