import PropTypes from "prop-types";
import { useState } from "react";

const Listitem = ({ task, deleteTask, editTask, index }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editedText, setEditedText] = useState(task);

  const handleDelete = () => {
    deleteTask(index);
  };

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleEditChange = (e) => {
    setEditedText(e.target.value);
  };

  const handleSave = () => {
    setIsEdit(false);
    editTask(editedText, index);
  };

  return (
    <li className="list-item">
      {isEdit ? (
        <input
          type="text"
          className="input"
          value={editedText}
          onChange={handleEditChange}
        />
      ) : (
        <span className="task">{task}</span>
      )}
      <div className="flex-row">
        {isEdit ? (
          <button className="btn btn-list" onClick={handleSave}>
            Save
          </button>
        ) : (
          <button className="btn btn-list" onClick={handleEdit}>
            edit
          </button>
        )}
        <button className="btn btn-list" onClick={handleDelete}>
          delete
        </button>
      </div>
    </li>
  );
};

Listitem.propTypes = {
  task: PropTypes.string.isRequired,
  deleteTask: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default Listitem;
