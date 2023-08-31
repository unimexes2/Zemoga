import React from "react";
import { Pressable, Text, View } from "react-native";
import Layout from "./Layout";
import { useContext } from "react";
import GlobalContext from "../GlobalContext";
import HeartButton from "../Components/HeartButton";
import styles from "./Styles/MainStyles";
import { useNavigation } from "@react-navigation/native";

const DetailsScreen = (data: any) => {
  const id: number = data.route.params.id;
  const navigation = useNavigation();
  const { GlobalFunctions, state } = useContext(GlobalContext);

  const onPressRefresh = () => {
    navigation.navigate("Main" as never);
  };

  return (
    <Layout>
      <Pressable style={styles.buttonBack} onPress={onPressRefresh}>
        <Text>⏪ Go Back to main screen</Text>
      </Pressable>
      <View style={styles.textDetails}>
        <Text style={styles.descriptionText}>{state.postList[id].title} </Text>
        <Text style={styles.textBody}>{state.postList[id].body} </Text>
        <View>
          <Text style={styles.heartText}>Add to favorite</Text>
          <View style={styles.heartImage}>
            <HeartButton
              id={id}
              isFavoriteProps={state.postList[id].favorite}
            />
          </View>
        </View>
      </View>
    </Layout>
  );
};

export default DetailsScreen;
