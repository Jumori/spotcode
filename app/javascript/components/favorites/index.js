import React, { Fragment, useState, useEffect } from 'react';
import ResultsTabs from './../common/results_tabs';
import FavoritesService from './../../services/favorites';

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  async function fetchFavorites() {
    let response = await FavoritesService.index();
    setFavorites(response.data);
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  return(
    <Fragment>
      <ResultsTabs 
        albums={favorites.albums || []} 
        artists={favorites.artists || []} 
        songs={favorites.songs || []} 
      />
    </Fragment>
  )
}