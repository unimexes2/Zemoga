import React, { useEffect, useState } from "react";
import { Pressable, Text } from "react-native";
import { useContext } from "react";
import GlobalContext from "../GlobalContext";
import styles from "../Layout/Styles/MainStyles";

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
    <Pressable onPress={toggleFavorite}>
      {!isFavorite ? <Text style={styles.heart} >🤍</Text>:<Text style={styles.heart} >❤️</Text>}
      
  
    </Pressable>
  );
};

export default HeartButton;
