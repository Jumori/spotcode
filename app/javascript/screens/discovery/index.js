import React, { Fragment } from 'react';
import SectionWrapper from './../../components/common/section_wrapper';
import NavbarFooter from './../../components/common/navbar_footer';
import Discovery from './../../components/discovery';

export default function DiscoveryScreen() {
  return (
    <Fragment>
      <SectionWrapper>
        <Discovery />
        <NavbarFooter />
      </SectionWrapper>
    </Fragment>
  )
}