import React, { Fragment, useState, useEffect, useRef } from 'react';
import { Columns, Button } from 'react-bulma-components';
import styled from 'styled-components';
import Music from './music';
import RecentlyHeardsService from './../../services/recently_heards';

const PlaySequenceButton = styled(Button)`
  margin-bottom: 30px;
`

export default function Musics(props) {
  const [songs, setSongs] = useState([]);
  const [playing, setPlaying] = useState([]);
  const audioRef = useRef();
  const [shuffle, setShuffle] = useState(false);

  // AUX FUNCTIONS -------------------------------------------------------------
  const nextSong = () => {
    if(shuffle) {
      let index = Math.floor(Math.random() * props.songs.length);
      setPlaying(props.songs[index]);
    } else 
      setPlaying([]);
  };

  const switchShuffle = () => {
    if(shuffle) {
      setShuffle(false);
      setPlaying([]);
    } else
      setShuffle(true);
  };

  useEffect(() => {
    setSongs(props.songs.map((song, key) =>
      <Music
        song={song}
        playing={playing.id == song.id}
        setPlaying={setPlaying}
        key={key}
        artist_name={props.artist_name}
      />
    ));
  }, [props.songs, playing]);

  useEffect(() => {
    if(audioRef.current !== null){
      audioRef.current.pause();
      audioRef.current.load();
      if(playing.id) {
        audioRef.current.play();
        RecentlyHeardsService.create(playing.album_id);
      }
    }
  }, [playing]);

  useEffect(() => {
    if(shuffle) nextSong();
  }, [shuffle]);

  return(
  <Fragment>
    <Columns className='is-mobile is-centered'>
      <Columns.Column desktop={{size: 2}} mobile={{size: 12}} className='has-text-centered'>
        <PlaySequenceButton
          className='is-medium'
          color='success'
          outlined
          onClick={() => switchShuffle()}
          >
            {shuffle ? 'Pause' : 'Shuffle'}
        </PlaySequenceButton>

        <audio 
          className='is-hidden'
          controls 
          ref={audioRef} 
          onEnded={() => nextSong()} 
        >
          <source src={playing.file_url} />
        </audio>

      </Columns.Column>
    </Columns>

    {songs}

  </Fragment>
  )
}