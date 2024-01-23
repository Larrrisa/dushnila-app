import { useEffect, useState } from "react";
import Arrow from "./images/Arrow_Right.svg";
import Logo from "./images/Cover.png";

function App() {
  const [data, setData] = useState([]);

  async function getData() {
    try {
      const link = "http://dushnila.gooddelo.com/data";
      const result = await fetch(link);
      const data = await result.json();
      setData(data);
      console.log(data);
    } catch {
      console.log("ERROR");
    }
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const timer = setInterval(getData, 60000);
    return () => {
      clearInterval(timer);
    };
  }, []);

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
            <img className="arrow" src={Arrow} />
          </div>
        </div>
        <div className="sidebar-logo">
          <img className="logo" src={Logo} />
        </div>

        <div className="sidebar-info" key="1">
          <div className="sidebar-info__temp">
            <p className="sidebar-info__data">
              {Number(data.temp).toFixed(1)} &#176;C
            </p>
            <p className="sidebar-info__name">Температура</p>
          </div>
          <div className="sidebar-info__co2">
            <p className="sidebar-info__data">{Math.floor(data.co2)} ppm</p>
            <p className="sidebar-info__name">CO2</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
