import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from './pages/home/home';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home" exact>
            <Home/>
          </Route>
          <Redirect to='/home'/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
