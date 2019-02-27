import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './configureStore';
import App from './App';

export default class AppProvider extends React.Component {

  constructor() {
    super();
    this.state = {
      store: null
    };
  }

  componentDidMount() {
    const storePromise = configureStore();

    storePromise.then(({ store }) => {
      this.setState({ store });
    });
  }

  render() {
    if (!this.state.store) {
      return null;
    }

    return (
      <Provider store={this.state.store}>
        <App />
      </Provider>
    );
  }
}