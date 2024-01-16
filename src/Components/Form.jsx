import { useState } from "react";
import PropTypes from "prop-types";

const Form = ({ taskList, setTaskList }) => {
  const [textVal, setTextVal] = useState("");

  const handleChange = (e) => {
    setTextVal(e.target.value);
  };

  const handleAdd = () => {
    if (textVal.trim() === "") {
      alert("no txt");
      return;
    }
    setTaskList([...taskList, textVal.trim()]);
    setTextVal(""); 
  };

  return (
    <div className="flex-row">
      <input
        name="taskName"
        type="text"
        className="input"
        placeholder="add item..."
        value={textVal}
        onChange={handleChange}
      />
      <button className="btn btn-add" onClick={handleAdd}>
        add
      </button>
    </div>
  );
};

Form.propTypes = {
  taskList: PropTypes.arrayOf(PropTypes.string).isRequired,
  setTaskList: PropTypes.func.isRequired,
};

export default Form;
