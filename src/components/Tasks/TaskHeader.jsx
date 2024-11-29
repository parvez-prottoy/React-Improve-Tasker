import TaskAction from "./TaskAction";
import TaskSearch from "./TaskSearch";

const TaskHeader = () => {
  return (
    <div className="mb-14 items-center justify-between sm:flex">
      <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
      <div className="flex items-center space-x-5">
        {/* Task Search */}
        <TaskSearch />
        {/* Task Action */}
        <TaskAction />
      </div>
    </div>
  );
};

export default TaskHeader;
