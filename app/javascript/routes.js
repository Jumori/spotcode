import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeScreen from './screens/home';
import SearchScreen from './screens/search';
import AlbumScreen from './screens/album';
import DiscoveryScreen from './screens/discovery';
import FavoritesScreen from './screens/favorites';

export default function Routes() {
  return(
    <Switch>
      <Route exact path='/' component={HomeScreen} />
      <Route exact path='/search' component={SearchScreen} />
      <Route exact path='/album/:id' component={AlbumScreen} />
      <Route exact path='/discovery' component={DiscoveryScreen} />
      <Route exact path='/favorites' component={FavoritesScreen} />
    </Switch>  
  )
}