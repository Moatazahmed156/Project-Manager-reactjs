import { useRef } from "react";
import Input from "./Input";
import Modal from "./modal";

export default function AddProject({ onAdd, onCancel }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modalRef = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;
    if (
      enteredTitle.trim() == "" ||
      enteredDescription.trim() == "" ||
      enteredDueDate.trim() == ""
    ) {
      modalRef.current.showModal();
      return;
    }
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }
  return (
    <>
      <Modal ref={modalRef}>
        <h2 className="text-xl font-bold my-4 text-stone-500">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops ... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field
        </p>
      </Modal>
      <div className="min-h-screen w-[65%] flex flex-col pt-24 pr-4 gap-6">
        <div className="w-full flex items-center justify-end gap-4">
          <button onClick={onCancel} className=" py-2  text-xl rounded-xl">
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-black text-white py-2 px-6 text-xl rounded-xl"
          >
            Save
          </button>
        </div>
        <div>
          <Input ref={title} label="Title" type="text" />
          <Input ref={description} label="Description" IsTextArea={true} />
          <Input ref={dueDate} label="Due Date" type="date" />
        </div>
      </div>
    </>
  );
}
