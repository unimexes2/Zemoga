import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useContext } from 'react';
import GlobalContext from '../GlobalContext';

interface HeartButtonProps {
  id: number;
  isFavoriteProps: boolean;
}

const HeartButton: React.FC<HeartButtonProps> = ({ id, isFavoriteProps }) => {
  const { GlobalFunctions, state } = useContext(GlobalContext);

  const [isFavorite, setIsFavorite] = useState(isFavoriteProps);

  useEffect(() => {
    if (state.userPostList[id]) {
      setIsFavorite(state.userPostList[id].favorite);
    }
  }, [state.userPostList]);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    isFavoriteProps = !isFavoriteProps;
    let arrToSet = JSON.parse(JSON.stringify(state.userPostList));
    arrToSet[id].favorite = !arrToSet[id].favorite;
    GlobalFunctions.userActionToState(arrToSet);
  };

  return (
    <TouchableOpacity onPress={toggleFavorite}>
      <Icon
        name={isFavorite ? 'heart' : 'heart-o'}
        size={30}
        color={isFavorite ? 'red' : 'black'}
      />
    </TouchableOpacity>
  );
};

export default HeartButton;
