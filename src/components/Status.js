import { useSelector } from "react-redux";
import status from "../styles/status.css";

export default function Status() {
  const status = useSelector((state) => state.slice.status);
  const message = useSelector((state) => state.slice.message);

  return (
    <div className={`sidebar-status_${status}`}>
      <p className="sidebar-status__header">{message}</p>
      <p className="sidebar-status__text">Все показатели в норме</p>
    </div>
  );
}
