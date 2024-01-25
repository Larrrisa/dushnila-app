import days from "../styles/days.css";

export default function Days() {
  return (
    <div className="sidebar-days">
      <p className="sidebar-days__header">Дней без душноты 0</p>
      <div className="btn">
        <span className="sidebar-days__btn ">
          История <span className="arrow"></span>
        </span>
      </div>
    </div>
  );
}
