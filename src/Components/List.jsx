import Listitem from "./Listitem";
import PropTypes from "prop-types";

const List = ({ taskList, setTaskList }) => {
  const deleteTask = (selectedTask) => {
    setTaskList(taskList.filter((task, index) => index !== selectedTask));
  };

  const editTask = (editedText , index) => {
   const tempList = [...taskList];
   tempList[index]= editedText;
   setTaskList(tempList);

  };
  return (
    <ul className="list">
      {taskList.map((task, index) => (
        <Listitem
          task={task}
          key={index}
          deleteTask={deleteTask}
          editTask={editTask}
          index={index}
        />
      ))}
    </ul>
  );
};

List.propTypes = {
  taskList: PropTypes.arrayOf(PropTypes.string).isRequired,
  setTaskList: PropTypes.func.isRequired,
};
export default List;
