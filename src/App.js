import React from 'react' ;
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import SignupScreen from './components/SignupScreen';
import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';
import Forgotpass from './components/Forgotpass';
// import store from './store';
// import { Provider } from 'react-redux';

//  const [userdetails, setUserdetails] = useState({})

function App() {
  return (
<>
<Router>
      <Switch>
         <Route path="/" component={SignupScreen} exact />
      </Switch>
      <Switch>
         <Route path="/login" component={LoginScreen }   />
      </Switch>
      <Switch>
         <Route path="/home" component={ HomeScreen}  />
      </Switch>
      <Switch>
         <Route path="/forgotpass" component={Forgotpass}  />
      </Switch>
     
</Router>
</>
  );
}

export default App;
