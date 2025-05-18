import noProject from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img src={noProject} className="w-20 h-20 object-contain mx-auto" />
      <h2 className="text-xl font-bold my-4 text-stone-500">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">Select a project or started new one</p>
      <Button onClick={onStartAddProject}>Create New Project</Button>
    </div>
  );
}
