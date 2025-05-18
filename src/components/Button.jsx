export default function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="bg-[#312d29] px-4 py-2 rounded-lg  text-stone-400 hover:bg-stone-600 hover:text-white"
    >
      {children}
    </button>
  );
}
