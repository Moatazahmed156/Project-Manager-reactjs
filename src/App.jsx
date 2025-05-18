import { useState, useEffect } from "react";
import NoProjectSelected from "./components/noProjectsScreen";
import SideBar from "./components/SideBar";
import AddProject from "./components/AddProject";
import ProjectDetails from "./components/ProjectDetails";
function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });
  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];
    const storedTasks = JSON.parse(localStorage.getItem("Tasks")) || [];

    setProjectsState((prev) => ({
      ...prev,
      projects: storedProjects,
      tasks: storedTasks,
    }));
  }, []);

  function handleAddTask(task) {
    const existingTasks = JSON.parse(localStorage.getItem("Tasks")) || [];
    const lastTask = existingTasks[existingTasks.length - 1];
    const newId = lastTask ? lastTask.id + 1 : 0;
    const newTask = {
      text: task,
      projectId: projectsState.selectedProjectId,
      id: newId,
    };
    setProjectsState((prev) => {
      return {
        ...prev,
        tasks: [...prev.tasks, newTask],
      };
    });
    const updatedProjects = [...existingTasks, newTask];
    localStorage.setItem("Tasks", JSON.stringify(updatedProjects));
  }
  function handleDeleteTask(taskId) {
    const updatedTasks = projectsState.tasks.filter(
      (task) => task.id !== taskId
    );

    setProjectsState((prev) => ({
      ...prev,
      tasks: updatedTasks,
    }));

    localStorage.setItem("Tasks", JSON.stringify(updatedTasks));
  }
  function handleSelectProject(id) {
    setProjectsState((prev) => {
      return { ...prev, selectedProjectId: id };
    });
  }
  function handleStartAddProject() {
    setProjectsState((prev) => {
      return { ...prev, selectedProjectId: null };
    });
  }
  function handleCancelProject() {
    setProjectsState((prev) => {
      return { ...prev, selectedProjectId: undefined };
    });
  }
  function handleAddProject(ProjectData) {
    const existingProjects = JSON.parse(localStorage.getItem("projects")) || [];
    const lastProject = existingProjects[existingProjects.length - 1];
    const newId = lastProject ? lastProject.id + 1 : 0;
    const newProject = {
      ...ProjectData,
      id: newId,
    };
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProjectId: newId,
        projects: [...prev.projects, newProject],
      };
    });
    const updatedProjects = [...existingProjects, newProject];
    localStorage.setItem("projects", JSON.stringify(updatedProjects));
  }
  const selectedProject = projectsState.projects.find(
    (e) => e.id == projectsState.selectedProjectId
  );

  function handleDeleteProject() {
    const updatedTasks = projectsState.tasks.filter(
      (task) => task.projectId !== projectsState.selectedProjectId
    );
    setProjectsState((prev) => ({
      ...prev,
      tasks: updatedTasks,
    }));
    localStorage.setItem("Tasks", JSON.stringify(updatedTasks));

    let existingProjects = JSON.parse(localStorage.getItem("projects")) || [];
    existingProjects = existingProjects.filter(
      (e) => e.id !== projectsState.selectedProjectId
    );
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
        projects: existingProjects,
      };
    });
    localStorage.setItem("projects", JSON.stringify(existingProjects));
  }

  let content = (
    <ProjectDetails
      project={selectedProject}
      onDeleteProject={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectsState.tasks.filter(
        (task) => task.projectId === projectsState.selectedProjectId
      )}
    />
  );
  if (projectsState.selectedProjectId === null) {
    content = (
      <AddProject onAdd={handleAddProject} onCancel={handleCancelProject} />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }
  return (
    <div className="w-screen flex gap-10 min-h-screen">
      <SideBar
        onStartAddProject={handleStartAddProject}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </div>
  );
}

export default App;
