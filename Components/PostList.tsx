import React, { useContext, useEffect, useState } from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HeartButton from './HeartButton';
import styles from '../Layout/Styles/MainStyles';
import GlobalContext from '../GlobalContext';
import uuid from 'react-native-uuid';
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  favorite: boolean;
}

const PostList = () => {
  const { GlobalFunctions, state } = useContext(GlobalContext);
  const navigation = useNavigation();
  const [arrState, setArrstate] = useState(state.userPostList);

  useEffect(() => {
    let arr: any = [];
    state.userPostList.map((val: any) => {
      val.favorite ? arr.unshift(val) : arr.push(val);
    });
    setArrstate(arr);
  }, [state]);

  const renderItem = ({ item }: { item: Post }) => (
    <Pressable
      onPress={() => {
        const route = { name: 'Details', params: { id: item.id } };
        navigation.navigate(route as never);
      }}
      key={uuid.v4() + JSON.stringify(item.title)}
    >
      <View style={styles.postContainer} key={uuid.v4() + "1"}>
        <Text style={styles.postTitle} key={uuid.v4() + '2'}>
          {item.title}
        </Text>
        <View style={styles.postContainerHeart}>
        <HeartButton
          id={item.id}
          isFavoriteProps={item.favorite}
          key={uuid.v4() + '3'}
        />
        </View>
      </View>
    </Pressable>
  );

  return (
    <FlatList
      data={arrState}
      keyExtractor={(item) => item.id.toString()+uuid.v4()}
      renderItem={renderItem}
      contentContainerStyle={styles.containerList}
    />
  );
};

export default PostList;
