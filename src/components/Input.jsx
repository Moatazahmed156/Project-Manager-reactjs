export default function Input({ label, IsTextArea, ...props }) {
  const classes =
    "bg-[#e1dfdd] p-1 outline-none border-b-2 border-stone-400 text-xl text-[#403e3c] focus:border-stone-900";

  return (
    <div className="flex flex-col gap-1">
      <label className="text-[#403e3c] uppercase font-bold">{label}</label>
      {IsTextArea ? (
        <textarea className={classes} {...props} />
      ) : (
        <input className={classes} {...props} />
      )}
    </div>
  );
}
