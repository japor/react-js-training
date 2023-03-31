import { useRef, useContext } from 'react';

export const AddGuestForm = ({ addGuest, handlePendingGuest }) => {
  const guestInput = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = guestInput.current.value;
    if (!value) {
      alert("Please input the name.")
      return;
    }
    addGuest(value)
    guestInput.current.value = "";
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Invite Someone" ref={guestInput} onChange={(e) => handlePendingGuest(e.target.value)} />
      <button type="submit" name="submit" value="submit">Submit</button>
    </form>
  );
};
