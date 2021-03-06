import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Paper from './pages/Paper';
import Products from './pages/Products';
import SellPoints from './pages/SellPoints';
import Providers from './pages/Providers';
import Clients from './pages/Clients';
import Employees from './pages/Employees';
import Sales from './pages/Sales';
import Deposits from './pages/Deposits';
import Shops from './pages/Shops';
import Transfert from './pages/Transfert';
import Outlays from './pages/Outlays';
import Losses from './pages/Losses';
import Debts from './pages/Debts';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/reports' component={Reports} />
          <Route path='/products' component={Products} />
          <Route path='/shops' component={Shops} />
          <Route path='/sellpoints' component={SellPoints} />
          <Route path='/providers' component={Providers} />
          <Route path='/clients' component={Clients} />
          <Route path='/employees' component={Employees} />
          <Route path='/sales' component={Sales} />
          <Route path='/deposits' component={Deposits} />
          <Route path='/transfert' component={Transfert} />
          <Route path='/outlays' component={Outlays} />
          <Route path='/losses' component={Losses} />
          <Route path='/debts' component={Debts} />
        </Switch>
      </Router>
    </>
  );
}

export default App;