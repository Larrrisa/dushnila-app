import Arrow from "./images/Arrow_Right.svg";
import Logo from "./images/Cover.png";

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
          <div class="btn">
            <button className="sidebar-days__btn">История</button>
            <img className="arrow" src={Arrow} />
          </div>
        </div>
        <div className="sidebar-logo">
          <img className="logo" src={Logo} />
        </div>
        <div className="sidebar-info">
          <div className="sidebar-info__temp">
            <p className="sidebar-info__data">24.3 &#176;C</p>
            <p className="sidebar-info__name">Температура</p>
          </div>
          <div className="sidebar-info__co2">
            <p className="sidebar-info__data">543 ppm</p>
            <p className="sidebar-info__name">CO2</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
