import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { GuestList, AddGuestForm, Counter, HideGuest } from "./components";

function App() {
  const [guests, setGuests] = useState([
    {
      id: uuid(),
      name: "Japor",
      isConfirmed: false,
      isEditting: true,
    },
    {
      id: uuid(),
      name: "Sarah",
      isConfirmed: true,
      isEditting: false,
    },
    {
      id: uuid(),
      name: "Kenneth",
      isConfirmed: false,
      isEditting: false,
    }
  ]);

  const [pendingGuest, setPendingGuest] = useState("");

  const handlePendingGuest = value => {
    setPendingGuest(value);
  };

  const [hideUnConfirmed, sethideUnConfirmed] = useState(false);

  const handleHideUnConfirmed = () => {
    sethideUnConfirmed(prevValue => !prevValue);
  }

  const toggleGuestProp = (id, prop) => {
    setGuests(prevGuests => prevGuests.map(guest => {
      if (guest.id === id) {
        return {
          ...guest,
          [prop]: !guest[prop],
        };
      }
      return guest;
    }));
  }

  // Handle Add Guest.
  const addGuest = name => {
    setGuests([
      ...guests,
      {
        id: uuid(),
        name,
        isConfirmed: false,
      }
    ]);
    setPendingGuest("");
  };

  // Handle Update Guest.
  const updateGuest = (id, newProps) => {
    setGuests(prevGuests => prevGuests.map(guest => {
      if (guest.id === id) {
        return {
          id,
          ...newProps
        };
      }
      return guest;
    }));
  };

  // Handle Remove Guest.
  const removeGuest = id => {
    const newGuests = guests.filter(guest => guest.id !== id);
    setGuests([
      ...newGuests
    ]);
  };

  return (
    <div className="App">
      <header>
        <h1>RSVP</h1>
        <p>A Treehouse App</p>
        <AddGuestForm addGuest={addGuest} handlePendingGuest={handlePendingGuest} />
      </header>
      <div className="main">
        <div>
          <h2>Invitees</h2>
          <HideGuest handleHideUnConfirmed={handleHideUnConfirmed} hideUnConfirmed={hideUnConfirmed} />
        </div>
        <Counter guests={guests} />
        <GuestList guests={guests} hideUnConfirmed={hideUnConfirmed} removeGuest={removeGuest} toggleGuestProp={toggleGuestProp} updateGuest={updateGuest} pendingGuest={pendingGuest} />
      </div>
    </div>
  );
}

export default App;
