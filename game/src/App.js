import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Home from './screens/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
