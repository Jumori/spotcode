import React, { Fragment } from 'react';
import { Image, Heading } from 'react-bulma-components';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const DivVerticalSpaced = styled.div `
  margin-top: 10px;
`

export default function Album(props) {
  return(
    <Fragment>
      <Link to={`/albums/${props.id}`}>      
        <Image src={props.cover_url}/>
        <DivVerticalSpaced>
          <Heading size={6} className='has-text-white'>{props.title}</Heading>
          <Heading size={6} className='has-text-white' subtitle>{props.artist_name}</Heading>
        </DivVerticalSpaced>
      </Link>
    </Fragment>
  )
}