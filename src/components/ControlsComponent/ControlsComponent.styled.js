import styled, { css } from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`;

export const VideoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const ListContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 100%;
`;

export const ListItem = styled.div`
  background-color: black;
  box-shadow: 1px 1px 10px 1px black;
  width: 250px;
  height: 350px;
  margin: 10px !important;
  padding: 15px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: opacity 0.3s;
  opacity: 0.8;
  &:hover,
  &:focus {
    opacity: 1;
  }
  border: 1px solid black;
  ${(props) => props.selected
    && css`
        border: 1px solid red;
    `}  
`;

export const ItemThumbNail = styled.img`
    width: 100%;
    max-height: 187px;
`;

export const ItemTitle = styled.h1`
    font-size: 16px;
    color: white;
`;

export const ItemDescription = styled.h5`
color: #a3a3a3;
font-size: 10px;
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
@supports (-webkit-line-clamp: 9) {
  white-space: initial;
  -webkit-line-clamp: 9;
  display: -webkit-box;
  -webkit-box-orient: vertical;
} 
`;

export const ButtonsContainer = styled.div`
    display: flex;
    width: auto;
    height: 50px;
    justify-content: center;
    background-color: black;
    box-shadow: 1px 1px 10px 1px black;
    padding: 15px;
    margin: 0px 15px 15px 15px;
`;

export const FiltersContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const IconButton = styled.img`
    background-color: white;
    width: 100px;
    border-radius: 25px;
    padding-top: 5px;
    margin-left: 10px;
    margin-right: 10px;
    padding-bottom: 5px;
    cursor: pointer;
`;
