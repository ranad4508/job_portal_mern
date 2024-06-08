import InputField from "../components/InputField";

const Location = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Location</h4>
      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>All
        </label>

        <InputField
          handleChange={handleChange}
          value="kathmandu"
          title="Kathmandu"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="lalitpur"
          title="Lalitpur"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="bhaktapur"
          title="Bhaktapur"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="chitwan"
          title="Chitwan"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="pokhara"
          title="Pokhara"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="dhangadhi"
          title="Dhangadhi"
          name="test"
        />
        <input type="text" />
      </div>
    </div>
  );
};

export default Location;
