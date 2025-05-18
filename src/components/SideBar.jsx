import Button from "./Button";

export default function SideBar({
  onStartAddProject,
  onSelectProject,
  selectedProjectId,
}) {
  const projects = JSON.parse(localStorage.getItem("projects")) || [];
  return (
    <div className="min-h-screen w-[20%] bg-stone-950 py-16 px-8 rounded-r-xl">
      <h1 className="text-white text-xl uppercase font-bold mb-8">
        Your Projects
      </h1>
      <Button onClick={onStartAddProject}>+ Add Project</Button>
      <ul className="[&>li]:p-1  [&>li]:my-2 [&>li]:px-2 [&>li]:w-full [&>li]:rounded [&>li]:text-lg [&>li]:text-[#a1a1a0] [&>li]:cursor-pointer mt-6 hover:[&>li]:bg-stone-800 hover:[&>li]:text-white">
        {projects.map((e) => {
          return (
            <li
              onClick={() => onSelectProject(e.id)}
              key={e.id}
              className={e.id === selectedProjectId ? "bg-stone-800" : ""}
            >
              <p className={e.id === selectedProjectId ? "text-white" : ""}>
                {e.title}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
