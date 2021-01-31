import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";

import to12 from "../utils/to12";
import InputText from "../comps/InputText";

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
          <InputText
            id="firstName"
            label="First Name"
            defaultValue={slot.details?.firstName}
          />
          <InputText
            id="lastName"
            label="Last Name"
            defaultValue={slot.details?.lastName}
          />
          <InputText
            id="phone"
            label="Phone"
            defaultValue={slot.details?.phone}
          />
          <div className="flex">
            <button
              type="button"
              onClick={handleCancel}
              className="w-1/2 mr-2 py-3 font-semibold text-gray-600 rounded hover:bg-gray-100"
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
