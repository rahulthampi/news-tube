import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';

import withReduxStore from '../lib/with-redux-store';

class NewsTube extends App {
  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withReduxStore(NewsTube);
