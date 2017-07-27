import React from 'react'
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'

import './App.css';

import Tab from './pages/tab'
import Main from './containers/main'
import Todos from './containers/todos'
import Detail from './components/detail'

const App = () => (
  <Router>
    <div className="reactroot">
      <Route exact path="/" component={Tab}/>
      <Route path="/me" component={Main}/>
      <Route path="/todos" component={Todos}/>
      <Route path="/detail/:id" component={Detail}/>
  </div>
  </Router>
)
export default App
