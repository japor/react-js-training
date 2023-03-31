import { useState } from "react";

export const EditGuestForm = ({ id, name, isConfirmed, setIsEditting, updateGuest }) => {
  const [guest, setGuest] = useState({ name, isConfirmed });

  const handleSubmit = () => {
    updateGuest(id, {
      name: guest.name,
      isConfirmed: guest.isConfirmed
    });
    setIsEditting(prevValue => !prevValue);
  };

  return (
    <li className={isConfirmed ? 'responded' : null}>
      <input type="text" value={guest.name} onChange={(e) => setGuest({ ...guest, name: e.target.value })} />
      <label>
        <input type="checkbox" checked={guest.isConfirmed} onChange={(e) => setGuest({ ...guest, isConfirmed: e.target.checked })} /> Confirmed
      </label>
      <button onClick={() => handleSubmit()}>Save</button>
      <button onClick={() => setIsEditting(prevValue => !prevValue)}>Cancel</button>
    </li >
  );
}
