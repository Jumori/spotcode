import React, { Fragment } from 'react';
import SectionWrapper from './../../components/common/section_wrapper';
import { Columns, Heading, Button } from 'react-bulma-components';
import styled from 'styled-components';

const MainHeading = styled(Heading) `
  margin-top: 50px;
`

const DescriptionList = styled.ul `
  margin-top: 50px;
  font-size: 20px;
  list-style-type: square;
`

const ButtonSubscribe = styled(Button) `
  border-width: 2px;
  margin-top: 50px;
`

export default function HomeScreen() {
  return (
    <SectionWrapper>
      <Columns>
        <Columns.Column>
          <MainHeading className='has-text-weight-light has-text-centered has-text-white' size={1}>
            YOUR <br /> <span className='has-text-success'>MUSIC APP</span>
          </MainHeading>
        </Columns.Column>
      </Columns>

      <Columns className="is-centered is-mobile">
        <Columns.Column mobile={{ size: 8, offset: 1 }} desktop={{ size: 4, offset: 2 }}>
          <DescriptionList className='has-text-white'>
            <li>Your <b>favorite</b> songs</li>
            <li>Your <b>podcasts</b></li>
            <li>Find the <b>releases</b></li>
            <li><b>Discover</b> new songs</li>
          </DescriptionList>
        </Columns.Column>
      </Columns>

      <Columns className="has-text-centered">
        <Columns.Column>        
          <a href="users/sign_up">
            <ButtonSubscribe className='is-success is-outlined is-large has-text-white'>SIGN UP NOW</ButtonSubscribe>
          </a>
        </Columns.Column>
      </Columns>
    </SectionWrapper>
  )
}