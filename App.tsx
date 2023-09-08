import { GlobalContextWrapper } from "./GlobalContext";
import RoutesMobile from "./Routes/RoutesMobile";
import RoutesWeb from "./Routes/RoutesWeb";
import { Platform } from "react-native";
export default function App() {
  return (
    <GlobalContextWrapper>
      {Platform.OS !== "web" ?
      <RoutesMobile />:<RoutesWeb/>}
    </GlobalContextWrapper>
  );
}
