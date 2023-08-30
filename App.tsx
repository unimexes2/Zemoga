import { GlobalContextWrapper } from './GlobalContext';
import Routes from './Routes';
export default function App() {
  return (
    <GlobalContextWrapper>
      <Routes />
    </GlobalContextWrapper>
  );
}
