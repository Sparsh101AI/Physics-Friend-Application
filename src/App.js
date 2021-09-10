
import './App.css';
import {
  BrowserRouter as Router,
  
  Route, Switch
 
} from "react-router-dom";
import HomePage from './HomePage/HomePage';
import AboutUs from './AboutUs/AboutUs';
import Nav from './Nav/Nav';
import Calculator from './Calculator/Calculator';



function App() {
  return (
      <Router>
          <div className="App">

          <Nav/>

            <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/AboutUs" component={AboutUs} />
          <Route path="/Calculator" component={Calculator}/>
          </Switch>



          </div>
      </Router>
  )
}

export default App;
