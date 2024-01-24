import Arrow from "./images/Arrow_Right.svg";
import Logo from "./images/Cover.png";
import { Provider } from "react-redux";
import store from "./store/store";
import MainInfo from "./components/MainInfo";

function App() {
  return (
    <div className="container">
      <h1 className="heading">Душнила</h1>
      <div className="main">
        <div className="sidebar-status_good">
          <p className="sidebar-status__header">Душнила доволен вами</p>
          <p className="sidebar-status__text">Все показатели в норме</p>
        </div>
        <div className="sidebar-days">
          <p className="sidebar-days__header">Дней без душноты 0</p>
          <div className="btn">
            <button className="sidebar-days__btn">История</button>
            <div className="arrow"></div>
          </div>
        </div>
        <div className="sidebar-logo">
          <img className="logo" src={Logo} />
        </div>
        <Provider store={store}>
          <MainInfo />
        </Provider>
      </div>
    </div>
  );
}

// async function getData() {
//   try {
//     const link = "http://dushnila.gooddelo.com/data";
//     const result = await fetch(link);
//     const data = await result.json();
//     setData(data);
//     console.log(data);
//   } catch {
//     console.log("ERROR");
//   }
// }

// useEffect(() => {
//   const timer = setInterval(getData, 60000);
//   return () => {
//     clearInterval(timer);
//   };
// }, []);

export default App;
