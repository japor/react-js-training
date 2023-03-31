import { EditGuestForm } from "./EditGuestForm";
import { useRef, useState } from "react";


export const Guest = (props) => {
  const [isEditting, setIsEditting] = useState(false);
  const { id, name, isConfirmed, removeGuest, toggleGuestProp } = props;

  if (isEditting) {
    return <EditGuestForm {...props} setIsEditting={setIsEditting} />
  }

  return (
    <li className={isConfirmed ? 'responded' : null}>
      <span>{name}</span>
      <label>
        <input type="checkbox" checked={isConfirmed} onChange={() => toggleGuestProp(id, 'isConfirmed')} /> Confirmed
      </label>
      <button onClick={() => setIsEditting(prevValue => !prevValue)}>Edit</button>
      <button onClick={() => removeGuest(id)}>remove</button>
    </li >
  );
};
