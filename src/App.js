
import './App.css';
import {
  BrowserRouter as Router,
  
  Route,
 
} from "react-router-dom";
import HomePage from './HomePage/HomePage';
import AboutUs from './AboutUs/AboutUs';


function App() {
  return (
      <Router>
          <div className="App">
          <Route path="/" component={HomePage} exact />
          <Route path="/AboutUs" component={AboutUs} />

          </div>
      </Router>
  )
}

export default App;
