import InputField from "../components/InputField";

const EmploymentType = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Job Type</h4>
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
          value="Full-time"
          title="Full-time"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="Part-time"
          title="Part-time"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="Remote"
          title="Remote"
          name="test"
        />
        <input type="text" />
      </div>
    </div>
  );
};

export default EmploymentType;
