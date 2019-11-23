import styled from 'styled-components/native';
import {FlatList} from 'react-native-gesture-handler';
import Button from '~/components/Button';

export const Container = styled.View``;
export const OrderList = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;
export const Order = styled.TouchableOpacity`
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  border: 1px solid #dddddd;
  margin-bottom: 10px;
`;
export const OrderInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
`;
export const StatusInfo = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
`;

export const Status = styled.Text`
  color: ${props => (props.answered ? '#42CB59' : '#999999')};
  font-size: 14px;
  font-weight: bold;
  margin-left: 16px;
`;
export const Time = styled.Text`
  font-size: 14px;
  color: #666666;
`;
export const Question = styled.Text`
  font-size: 14px;
  color: #666666;
  line-height: 26px;
`;
export const HelpOrderButton = styled(Button)``;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'small',
  color: '#999',
})`
  margin: 30px 0;
`;
