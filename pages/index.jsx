import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Home = () => (
  <div>
    <Title>
      {'My first server side app'}
    </Title>
  </div>
);

const Title = styled.h1`
  color: red;
`;

export default connect()(Home);
