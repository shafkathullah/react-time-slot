import { useLocation } from "react-router-dom";
import to12 from "../utils/to12";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function DetailsForm() {
  let query = useQuery();
  const start = query.get("start");
  const end = query.get("end");

  const handleFormSubmit = () => {
    alert("form submitted!");
  };

  return (
    <div className="container mx-auto pt-10">
      <h1 className="text-center font-semibold">
        Enter details for slot {to12(start)}-{to12(end)}
      </h1>
      <div className="w-1/3 mt-10 mx-auto">
        <form onSubmit={handleFormSubmit}>
          <div className="mb-8 flex flex-col">
            <label className="text-sm text-gray-700 " htmlFor="firstName">
              First name
            </label>
            <input
              className="bg-gray-100 rounded text-lg px-4 py-2 text-gray-700"
              required
              type="text"
              name="firstName"
              id="firstName"
            />
          </div>
          <div className="mb-8 flex flex-col">
            <label className="text-sm text-gray-700 " htmlFor="lastName">
              Last name
            </label>
            <input
              className="bg-gray-100 rounded text-lg px-4 py-2 text-gray-700"
              required
              type="text"
              name="lastName"
              id="lastName"
            />
          </div>
          <div className="mb-8 flex flex-col">
            <label className="text-sm text-gray-700 " htmlFor="phone">
              Phone number
            </label>
            <input
              className="bg-gray-100 rounded text-lg px-4 py-2 text-gray-700"
              required
              type="tel"
              name="phone"
              id="phone"
            />
          </div>
          <div className="flex">
            <button className="w-1/2 mr-2 py-4 border font-semibold text-gray-600 rounded hover:bg-gray-100">
              Cancel
            </button>
            <button
              className="w-1/2 py-4 bg-green-600 font-semibold text-white rounded hover:bg-green-700"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DetailsForm;
