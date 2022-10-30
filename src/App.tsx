
import { Provider } from 'react-redux';
import { Route, Switch, useRoute } from 'wouter';
import './App.css';
import CreateUser from './pages/user';
import Home from './pages/home';
import ListUser from './pages/list-users';
import Navbar from './shared/navbar';
import storeUser from './store/storeUser';
import React from 'react';


const App = () => {



  return (
    <Provider store={storeUser}>
      <Navbar />
      <div className='background'>

        <Switch>
          <Route path='/'> <Home/> </Route>
          <Route path='/user' ><CreateUser id={null} /></Route>
          <Route path="/user/:id">
            {(params)=><CreateUser id={params.id} />}
          </Route>
          <Route path='/users'><ListUser/></Route>
        </Switch>
      </div>
    </Provider>

  );
}

export default App;
