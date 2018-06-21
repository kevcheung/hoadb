import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import routes from './routes';
import store from './store';
import Navbar from './components/Navbar/Navbar';

class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div className="App">
            <Navbar />
            {routes}
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;