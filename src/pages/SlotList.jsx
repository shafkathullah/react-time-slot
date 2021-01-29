import { Link } from "react-router-dom";
import to12hr from "../utils/to12";

function SlotList({ startHour = 9, endHour = 17 }) {
  const slotCount = endHour - startHour;
  const slotArray = Array.from({ length: slotCount }, (_, x) => {
    return {
      start: startHour + x,
      end: startHour + x + 1,
    };
  });
  console.log({ slotCount });
  console.log({ slotArray });
  return (
    <div className="container mx-auto pt-10">
      <h1 className="text-center font-semibold">Choose your slot</h1>
      <ul className="w-48 mx-auto mt-10">
        {slotArray.map((slot) => (
          <SlotItem key={slot.start} slot={slot} />
        ))}
      </ul>
    </div>
  );
}

function SlotItem({ slot }) {
  return (
    <Link to={`/details?start=${slot.start}&end=${slot.end}`}>
      <li className="p-5 bg-gray-100 border border-gray-200 rounded text-center text-gray-800 mb-2 hover:bg-gray-200">
        {to12hr(slot.start)} - {to12hr(slot.end)}
      </li>
    </Link>
  );
}

export default SlotList;
