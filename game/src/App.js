import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Home from './screens/Home';
import Name from './screens/Name';
import Finish from './screens/Finish';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='/finish' component={Finish} />
          <Route path='/home' component={Home} />
          <Route path='/' component={Name} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
