import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SideNavbar from './Components/SideNavbar/SideNavbar';
import Home from './Components/Home/Home';
import SecondHome from './Components/Home/SecondHome';

function App() {
  return (
    <div className="App">

      <Router>
        <SideNavbar />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/second-home">
            <SecondHome />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <h3 className="text-center">Page Not Found </h3>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
