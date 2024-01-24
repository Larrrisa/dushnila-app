import { useDispatch, useSelector } from "react-redux";
import { getData } from "../store/slice";
import { useEffect } from "react";

export default function MainInfo() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.slice.data);

  useEffect(() => {
    dispatch(getData());
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(getData());
      setInterval(() => {
        dispatch(getData());
      }, 60000);
    }, 60000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
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
  );
}
