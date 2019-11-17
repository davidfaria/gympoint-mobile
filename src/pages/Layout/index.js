import React from 'react';

import {Wrapper, Container} from './styles';
import Header from '../../components/Header';

export default function Layout({children}) {
  return (
    <Wrapper>
      <Header />
      <Container>{children}</Container>
    </Wrapper>
  );
}
