import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'


import Main from './containers/main'
import Todos from './containers/todos'
import Detail from './components/detail'

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Main</Link></li>
        <li><Link to="/todos">Todos</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Main}/>
      <Route path="/detail/:id" component={Detail}/>
      <Route path="/todos" component={Todos}/>
    </div>
  </Router>
)
export default App
