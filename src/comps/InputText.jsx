const InputText = ({ defaultValue, id, label }) => (
  <div className="mb-8 flex flex-col">
    <label className="text-sm text-gray-700 " htmlFor={id}>
      {label}
    </label>
    <input
      className="bg-gray-100 rounded text-lg px-4 py-2 text-gray-700"
      required
      defaultValue={defaultValue}
      type="text"
      name={id}
      id={id}
    />
  </div>
);

export default InputText;
