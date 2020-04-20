import React, { Fragment } from 'react';
import { Heading } from 'react-bulma-components';
import SectionWrapper from './../../components/common/section_wrapper';
import NavbarFooter from './../../components/common/navbar_footer';
import Favorites from './../../components/favorites';

export default function FavoritesScreen() {
  return (
    <Fragment>
      <SectionWrapper>
        <Heading className='has-text-centered has-text-white'>Favorites</Heading>
        <Favorites />
      </SectionWrapper>
      <NavbarFooter />
    </Fragment>
  )
}