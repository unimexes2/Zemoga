import { View } from "react-native";
import HeaderCustom from "./HeaderCustom";
import styles from "./Styles/MainStyles";

export default function Layout({ children }: any) {
  return (
    <View style={styles.container}>
      <HeaderCustom />
      <>{children}</>
    </View>
  );
}
