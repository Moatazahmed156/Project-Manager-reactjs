import NewTask from "./NewTask";

export default function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-900 my-3 mx-2 uppercase">
        Tasks
      </h2>
      <NewTask onAdd={onAdd} />
      {tasks.length == 0 ? (
        <p className="text-stone-800 my-4">
          This project does not have any tasks yet.
        </p>
      ) : (
        <ul className="px-4 py-2 mt-8 rounded bg-stone-100">
          {tasks.map((e) => (
            <li key={e.id} className="flex justify-between my-4">
              <span>{e.text}</span>
              <button
                onClick={() => onDelete(e.id)}
                className="text-stone-700 text-lg hover:text-red-500"
              >
                clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
