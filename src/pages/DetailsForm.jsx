import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import to12 from "../utils/to12";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function DetailsForm() {
  const history = useHistory();

  //Get data from URL params
  let query = useQuery();
  const start = Number(query.get("start"));
  const end = Number(query.get("end"));

  //Redux
  const dispatch = useDispatch();
  const slot = useSelector((state) => {
    return state.find((item) => item.start === start);
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, phone } = e.target.elements;
    dispatch({
      type: "UPDATE",
      data: {
        ...slot,
        details: {
          firstName: firstName.value,
          lastName: lastName.value,
          phone: phone.value,
        },
      },
    });
    history.push("/");
  };

  const handleCancel = (e) => {
    e.preventDefault();
    dispatch({
      type: "UPDATE",
      data: {
        ...slot,
        details: null,
      },
    });
    history.push("/");
  };

  if (!slot) {
    return <div>Bad 404! Invalid URL</div>;
  }

  return (
    <div className="container mx-auto pt-10">
      <h1 className="text-center font-semibold">
        Enter details for slot {to12(start)}-{to12(end)}
      </h1>
      <div className="w-1/3 mt-10 mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="mb-8 flex flex-col">
            <label className="text-sm text-gray-700 " htmlFor="firstName">
              First name
            </label>
            <input
              className="bg-gray-100 rounded text-lg px-4 py-2 text-gray-700"
              required
              defaultValue={slot.details?.firstName}
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
              defaultValue={slot.details?.lastName}
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
              defaultValue={slot.details?.phone}
              type="tel"
              name="phone"
              id="phone"
            />
          </div>
          <div className="flex">
            <button
              type="button"
              onClick={handleCancel}
              className="w-1/2 mr-2 py-3 border font-semibold text-gray-600 rounded hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              className="w-1/2 py-3 bg-green-600 font-semibold text-white rounded hover:bg-green-700"
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
