import styled, { css } from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: auto;
    min-height: 350px;
    justify-content: center;
    background-color: black;
    box-shadow: 1px 1px 10px 1px black;
    padding: 15px;
    margin: 15px;
`;

export const VideoContainer = styled.div`
    width: 100%;
    height: 350px;
    max-width: 500px;
    box-shadow: 1px 1px 10px 1px white;
    display: flex;
    justify-content: center;
    padding: 15px;    
`;

export const Video = styled.video`
${(props) => props.filters
    && css`
        filter: contrast(${props.filters.contrast_percentage / 100}) brightness(${props.filters.brightness_percentage / 100});
    `}
`;

export const IntroLabel = styled.h1`
    color: white;
    display: flex;
    align-items: center;
`;
