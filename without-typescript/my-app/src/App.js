import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './pages/HomePage';
import DefaultTheme from './styles/DefaultTheme';

function App() {
  return (
    <DefaultTheme>
      <Router>
        <Switch>
          <Route path="/" component={HomePage}/>
        </Switch>
      </Router>
    </DefaultTheme>
  );
}

export default App;
