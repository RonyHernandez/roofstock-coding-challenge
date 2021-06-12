import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PropertyList from './pages/property-list';
import PropertyDetails from './pages/property-details';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/property-details/:id/:address" >
            <PropertyDetails />  
          </Route>
          <Route path="/">
            <PropertyList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
