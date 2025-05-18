import Tasks from "./Tasks";

export default function ProjectDetails({
  project,
  onDeleteProject,
  onAddTask,
  onDeleteTask,
  tasks,
}) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-UK", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className="w-[65%] mt-20">
      <header className="py-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <button
            onClick={onDeleteProject}
            className="text-stone-600 text-lg hover:text-red-500"
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-slate-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
    </div>
  );
}
