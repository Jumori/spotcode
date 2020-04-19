import React, { Fragment, useState } from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import FavoritesService from './../../services/favorites';

export default function Favorite(props) {
  const [favorite, setFavorite] = useState(props.favored);

  let FavoredButton;
  if(favorite) 
    FavoredButton = <FaHeart size='20px' className='has-text-white'
                                onClick={() => removeFav()} />
  else 
    FavoredButton = <FaRegHeart size='20px' className='has-text-white' 
                              onClick={() => addFav()} />

  // AUX FUNCTIONS -------------------------------------------------------------
  async function removeFav() {
    await FavoritesService.delete(props.kind, props.id);
    setFavorite(false);
  };
  async function addFav() {
    await FavoritesService.create(props.kind, props.id);
    setFavorite(true);
  };

  return (
    <Fragment>
      {FavoredButton}
    </Fragment>
  );
}