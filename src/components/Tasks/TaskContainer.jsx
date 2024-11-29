import TaskHeader from "./TaskHeader";
import Tasks from "./Tasks";

const TaskContainer = () => {
  return (
    <section className="mb-20 pt-20 md:mt-[100px]" id="tasks">
      <div className="container">
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          {/* Task Header */}
          <TaskHeader />
          {/* Tasks */}
          <Tasks />
        </div>
      </div>
    </section>
  );
};

export default TaskContainer;
