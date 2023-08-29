import React from 'react';
import { StyleSheet, Text, Pressable, View } from 'react-native';
import GlobalContext from '../GlobalContext';
import { useNavigation } from '@react-navigation/native';
import styles from './Styles/MainStyles';
export default function HeaderCustom() {
  const navigation = useNavigation(); 

  const { GlobalFunctions, state } = React.useContext(GlobalContext);
  const onPressRefresh = () => {
    GlobalFunctions.globalFetchApi();
    navigation.navigate('Main' as never);
  };
  const onPressDelete = () => {
    let id: number = 0;
    let deletedArray = state.userPostList.filter((el: any) => {
      if (el.favorite) {
        el.id = id;
        id++;
        return el;
      }
    });

    GlobalFunctions.userActionToState(deletedArray);
  };

  return (
    <View style={styles.header}>
      <Pressable style={styles.button} onPress={onPressRefresh}>
        <Text>API call 🌐</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={onPressDelete}>
        <Text>Left only ❤️</Text>
      </Pressable>
    </View>
  );
}
