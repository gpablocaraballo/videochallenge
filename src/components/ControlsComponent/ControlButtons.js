import React, { useState } from 'react';
import {
  ButtonsContainer,
  FiltersContainer,
  IconButton,
} from './ControlsComponent.styled';
import { useAppContext } from '../../libs/context-lib';
import { DEFAULT_FILTER_STATE } from '../../libs/constants';
import { APP_ACTIONS } from '../../libs/reducerAction-lib';
import PlayIcon from '../../assets/play-solid.svg';
import PauseIcon from '../../assets/pause-solid.svg';
import VolumeEnableIcon from '../../assets/volume-high-solid.svg';
import VolumeDisableIcon from '../../assets/volume-xmark-solid.svg';

export default function ControlButtons() {
  const { dispatch, state } = useAppContext();
  const [contrast, setContrast] = useState(DEFAULT_FILTER_STATE.contrast_percentage);
  const [brightness, setBrightness] = useState(DEFAULT_FILTER_STATE.brightness_percentage);

  const onButtonClicked = (actionTriggered) => {
    dispatch({ type: APP_ACTIONS.SET_CONTROLS_STATE, data: actionTriggered });
  };

  const onContrastChanged = (value) => {
    setContrast(value);
    dispatch({
      type: APP_ACTIONS.SET_VIDEOFILTERS_STATE,
      data: { ...state.filters, contrast_percentage: value },
    });
  };

  const onBrightnessChanged = (value) => {
    setBrightness(value);
    dispatch({
      type: APP_ACTIONS.SET_VIDEOFILTERS_STATE,
      data: { ...state.filters, brightness_percentage: value },
    });
  };

  return (
    <ButtonsContainer>
      <FiltersContainer>
        <input title="Change Contrast" type="range" min="0" max="100" onChange={(e) => onContrastChanged(e.target.value)} value={contrast} />
        <input title="Change Brightness" type="range" min="0" max="100" onChange={(e) => onBrightnessChanged(e.target.value)} value={brightness} />
      </FiltersContainer>
      {state.controls.isPlaying
        ? <IconButton src={PauseIcon} onClick={() => onButtonClicked({ ...state.controls, isPlaying: false })} title="Click to Pause" />
        : <IconButton src={PlayIcon} onClick={() => onButtonClicked({ ...state.controls, isPlaying: true })} title="Click to Play" />}
      {state.controls.isMuted
        ? <IconButton src={VolumeEnableIcon} onClick={() => onButtonClicked({ ...state.controls, isMuted: false })} title="Click to Enable Volumen" />
        : <IconButton src={VolumeDisableIcon} onClick={() => onButtonClicked({ ...state.controls, isMuted: true })} title="Click to Disable Volume" />}
    </ButtonsContainer>
  );
}
