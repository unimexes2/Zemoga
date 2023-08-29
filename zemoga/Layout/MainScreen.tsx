import { ScrollView, StyleSheet, Text, View } from 'react-native';
import PostList from '../Components/PostList';
import GlobalContext from '../GlobalContext';
import { useContext, useEffect, useState } from 'react';

import Layout from './Layout';
export default function MainScreen() {
  const { GlobalFunctions, state } = useContext(GlobalContext);

  return <Layout>{state.userPostList ? <PostList /> : null}</Layout>;
}
const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
  },
});
