import { useSelector } from "react-redux";
import SlotItem from "../comps/SlotItem";

function SlotList({ startHour = 9, endHour = 17 }) {
  const slotArray = useSelector((state) => state);

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

export default SlotList;
