import { useDispatch, useSelector } from "react-redux";
import { getData } from "../store/dataSlice";
import { useEffect } from "react";
import maininfo from "../styles/maininfo.css";

export default function MainInfo() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.slice.data);
  const status = useSelector((state) => state.slice.status);

  useEffect(() => {
    dispatch(getData());
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(getData());
    }, 60000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={`sidebar-info_${status}`} key="1">
      <div className="sidebar-info__temp">
        <p className="sidebar-info__data">
          {Number(data.temp).toFixed(1)} &#176;C
        </p>
        <p className="sidebar-info__name">Температура</p>
      </div>
      <div className="sidebar-info__co2">
        <p className="sidebar-info__data">{Math.floor(Number(data.co2))} ppm</p>
        <p className="sidebar-info__name">CO2</p>
      </div>
    </div>
  );
}
