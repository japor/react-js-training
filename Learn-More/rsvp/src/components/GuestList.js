import { Guest } from "../components";

export const GuestList = ({ guests, hideUnConfirmed, removeGuest, toggleGuestProp, updateGuest, pendingGuest }) => {
  const guestsList = !hideUnConfirmed ? guests : guests.filter(guest => guest.isConfirmed);
  return (
    <ul>
      {guestsList && guestsList.map(guest => <Guest key={guest.id}  {...guest} removeGuest={removeGuest} toggleGuestProp={toggleGuestProp} updateGuest={updateGuest} />)}
      {pendingGuest && <li className="pending"><span>{pendingGuest}</span></li>}
    </ul>
  );
};
