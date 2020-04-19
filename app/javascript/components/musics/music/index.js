import React, { Fragment } from 'react';
import { Heading, Columns } from 'react-bulma-components';
import { FaPlayCircle, FaStopCircle } from "react-icons/fa";
import styled from 'styled-components';
import Favorite from './../../favorite';

const MusicSeparator = styled.hr `
  height: 1px;
  margin-top: 0px;
`

const CustomSubHeading = styled(Heading) `
  margin-bottom: 0px !important;
`

export default function Music(props) {
  let playingStatus;
  if (props.playing) 
    playingStatus = <FaStopCircle 
                      size='25px' className='has-text-white' 
                      onClick={() => props.setPlaying([])}/>
  else 
    playingStatus = <FaPlayCircle 
                      size='25px' className='has-text-white' 
                      onClick={() => props.setPlaying(props.song)}/>

  return(
    <Fragment>
      <Columns className='is-vcentered is-mobile is-centered'>
        <Columns.Column desktop={{ size: 1 }} mobile={{ size: 2 }} >
          {playingStatus}
        </Columns.Column>
        <Columns.Column desktop={{ size: 4 }} mobile={{ size: 8 }}>
          <Columns className='is-vcentered is-mobile'>
            <Columns.Column desktop={{ size: 8 }} mobile={{ size: 8 }}>
              <Heading size={5} className='has-text-white'>
                {props.song.title}
              </Heading>
              <CustomSubHeading size={6} className='has-text-white' subtitle>
                {props.song.artist_name}
              </CustomSubHeading>
            </Columns.Column>
            <Columns.Column 
              desktop={{ size: 4 }} mobile={{ size: 4 }} 
              className='is-pulled-right has-text-right'>
              <Favorite id={props.song.id} kind='songs' favored={props.song.favorite} />
            </Columns.Column>
          </Columns>
          
          <MusicSeparator />
        </Columns.Column>
      </Columns>
    </Fragment>
  )
}