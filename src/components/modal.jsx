import { createPortal } from "react-dom";
import Button from "./Button";

export default function Modal({ children, ref }) {
  return createPortal(
    <dialog
      ref={ref}
      className="backdrop:bg-stone-900/90 p-4 rounded-xl shadow-xl"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>Okay</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
}
