/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import get from 'lodash.get';
import {
  ListItem,
  ItemThumbNail,
  ItemTitle,
  ItemDescription,
} from './ControlsComponent.styled';
import NoImage from '../../assets/no-image.png';
import { useAppContext } from '../../libs/context-lib';
import { APP_ACTIONS } from '../../libs/reducerAction-lib';
import { DEFAULT_PLAYER_STATE } from '../../libs/constants';

export default function Item({ item = {} }) {
  const { dispatch, state } = useAppContext();
  const [imageFailed, setImageFailed] = useState(false);

  const onItemClicked = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    dispatch({ type: APP_ACTIONS.SET_VIDEO, data: { ...item, url: get(item, 'sources[0]', null) } });
    dispatch({ type: APP_ACTIONS.SET_CONTROLS_STATE, data: DEFAULT_PLAYER_STATE });
  };

  return (
    <ListItem onClick={onItemClicked} selected={state.video.title === item.title}>
      {item.thumb && !imageFailed ? (
        <ItemThumbNail src={item.thumb} onError={() => setImageFailed(true)} />
      ) : (
        <ItemThumbNail src={NoImage} alt="unavailable" />
      )}
      <ItemTitle>{item.title}</ItemTitle>
      <ItemDescription>{item.description}</ItemDescription>
    </ListItem>
  );
}
