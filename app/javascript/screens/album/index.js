import React, { Fragment } from 'react';
import NavbarFooter from './../../components/common/navbar_footer';
import Albums from './../../components/albums';
import SectionWrapper from './../../components/common/section_wrapper';

export default function AlbumScreen() {
  return (
    <Fragment>
      <SectionWrapper>
        <Albums />
        <NavbarFooter />
      </SectionWrapper>
    </Fragment>
  )
}