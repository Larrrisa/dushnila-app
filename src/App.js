import { Provider } from "react-redux";
import store from "./store/store";
import MainInfo from "./components/MainInfo";
import Status from "./components/Status";
import Days from "./components/Days";
import Logo from "./components/Logo";
import Header from "./components/Header";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="main">
        <Provider store={store}>
          <Status />
          <Days />
          <Logo />
          <MainInfo />
        </Provider>
      </div>
    </div>
  );
}

export default App;
