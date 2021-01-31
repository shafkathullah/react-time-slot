import { Link } from "react-router-dom";
import to12hr from "../utils/to12";

const SlotItem = ({ slot: { start, end, details } }) => (
  <Link to={`/details?start=${start}&end=${end}`}>
    <li
      className={`p-4 mb-4 bg-gray-100 ${
        details && "bg-red-100"
      } border border-gray-200 rounded text-center text-gray-800 hover:bg-gray-200`}
    >
      {to12hr(start)} - {to12hr(end)}
    </li>
  </Link>
);

export default SlotItem;
