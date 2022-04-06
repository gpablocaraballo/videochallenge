import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import get from 'lodash.get';
import {
  Container,
  VideoContainer,
  ListContainer,
} from './ControlsComponent.styled';
import {
  LabelBox,
  LoadingBox,
} from '../Common.styled';
import Item from './Item';
import ControlButtons from './ControlButtons';
import { useAppContext } from '../../libs/context-lib';
import LoadingIcon from '../../assets/loading.svg';

const ITEMS_API_URL = 'https://api.jsonbin.io/b/5ef409df2406353b2e0c4068';

export default function ControlsComponent() {
  const { state } = useAppContext();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getItems = async () => {
      setLoading(true);
      try {
        const response = await Axios({
          url: ITEMS_API_URL,
        });
        setItems(get(response.data, 'categories[0].videos', []));
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getItems();
  }, []);

  return (
    <Container>
      {loading ? (
        <LoadingBox>
          <img src={LoadingIcon} alt="loading" />
        </LoadingBox>
      ) : (
        <VideoContainer>
          {state.video.url && <ControlButtons />}
          <ListContainer>
            {(items.length > 0) ? (
              <>
                {items.map((row) => (
                  <Item key={row.thumb} item={row} />
                ))}
              </>
            ) : (
              <LabelBox>No items found.</LabelBox>
            )}
          </ListContainer>
        </VideoContainer>
      )}
    </Container>
  );
}
