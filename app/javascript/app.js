import React, { Fragment } from 'react';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import './app.scss';
import Menu from './components/common/menu';

function App() {
  return ( 
    <Fragment>
      <BrowserRouter>
        <Menu />
        <Routes />
      </BrowserRouter>
    </Fragment>
  )
};

export default App;