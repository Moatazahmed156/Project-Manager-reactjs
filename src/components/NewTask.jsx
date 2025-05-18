import { useRef } from "react";
import Modal from "./modal";
export default function NewTask({ onAdd }) {
  const task = useRef();
  const modalRef = useRef();

  function handleClick() {
    if (task.current.value.trim() == "") {
      modalRef.current.showModal();
      return;
    }
    onAdd(task.current.value);
    task.current.value = "";
  }
  return (
    <>
      <Modal ref={modalRef}>
        <h2 className="text-xl font-bold my-4 text-stone-500">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops ... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for task input field
        </p>
      </Modal>
      <div className="flex items-center gap-4 ">
        <input
          ref={task}
          type="text"
          className="w-72 px-2 py-1  bg-stone-200 outline-none text-xl border-b-2 border-black"
        />
        <button
          onClick={handleClick}
          className="text-stone-600 text-xl  hover:text-slate-950"
        >
          Add Task
        </button>
      </div>
    </>
  );
}
