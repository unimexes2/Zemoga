import { StyleSheet, Text, View } from 'react-native';
import HeaderCustom from './HeaderCustom';

import { useContext } from 'react';
import GlobalContext from '../GlobalContext';
import styles from './Styles/MainStyles';

export default function Layout({ children }: any) {
  const { GlobalFunctions, state } = useContext(GlobalContext);

  return (
    <View style={styles.container}>
      <HeaderCustom />
      <>{children}</>
    </View>
  );
}
