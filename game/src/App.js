import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <div className="App">
          </div>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
