/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect, useState, useRef } from 'react';
import get from 'lodash.get';
import {
  Container,
  VideoContainer,
  Video,
  IntroLabel,
} from './DisplayComponent.styled';
import { useAppContext } from '../../libs/context-lib';
import { DEFAULT_PLAYER_STATE } from '../../libs/constants';

export default function DisplayComponent() {
  const videoRef = useRef(null);
  const { state } = useAppContext();
  const [currentVideo, setCurrentVideo] = useState(null);

  const resetPlayer = () => {
    if (videoRef && videoRef.current) {
      // i need it to update the current video on dom
      // otherwise its not gonna update the video streaming
      videoRef.current.load();
      videoRef.current.muted = DEFAULT_PLAYER_STATE.isMuted;
      if (DEFAULT_PLAYER_STATE.isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };
  useEffect(() => {
    const url = get(state.video, 'url', null);
    const thumb = get(state.video, 'thumb', null);
    if (url) {
      setCurrentVideo({ url, thumb });
    } else {
      setCurrentVideo(null);
    }
    resetPlayer();
  }, [state.video]);

  useEffect(() => {
    if (currentVideo) {
      if (state.controls.isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [state.controls.isPlaying]);

  useEffect(() => {
    if (currentVideo) {
      videoRef.current.muted = state.controls.isMuted;
    }
  }, [state.controls.isMuted]);

  return (
    <Container>
      <VideoContainer>
        {currentVideo ? (
          <Video filters={state.filters} ref={videoRef} poster={currentVideo.thumb} width="100%" height="auto">
            <source src={currentVideo.url} type="video/mp4" />
          </Video>
        ) : (
          <IntroLabel>¡Click a video to start!</IntroLabel>
        )}
      </VideoContainer>
    </Container>
  );
}
