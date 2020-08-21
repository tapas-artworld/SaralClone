import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Router, Switch, Route} from 'react-router-dom'
import history from "./Components/history"
import Exercises from "./Components/Exercises"
import ContentExercises from "./Components/ContentExercises"

ReactDOM.render(
  <React.StrictMode>
        <Router history={history}>
          <Switch>
         <Route exact path="/" component={App} />
         <Route exact path="/Exercises" component={Exercises} />
         <Route exact path="/ContentExercises" component={ContentExercises} />

         </Switch>
        </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
