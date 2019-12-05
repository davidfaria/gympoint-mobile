import styled from 'styled-components/native';
import Button from '../../components/Button';
import {FlatList} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;

export const CheckinButton = styled(Button)``;

export const CheckinList = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const CheckinInfo = styled.View`
  background-color: #fff;
  padding: 15px 20px;
  margin-bottom: 10px;

  flex-direction: row;
  justify-content: space-between;

  border: 1px solid #dddddd;
`;
export const Label = styled.Text`
  color: #444444;
  font-weight: bold;
  font-size: 14px;
`;
export const Time = styled.Text`
  color: #666666;
  font-size: 12px;
`;
