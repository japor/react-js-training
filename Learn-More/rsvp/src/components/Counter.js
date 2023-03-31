export const Counter = ({ guests }) => {
  // Total Guest.
  const totalGuest = guests.length;

  // Total Guest Attending.
  const totalAttending = guests.reduce((total, guest) => {
    return guest.isConfirmed ? total + 1 : total;
  }, 0);

  // Total Guest Unconfirmed.
  const totalUnConfirmed = totalGuest - totalAttending;

  return (
    <table className="counter">
      <tbody>
        <tr>
          <td>Attending:</td>
          <td>{totalAttending}</td>
        </tr>
        <tr>
          <td>Unconfirmed:</td>
          <td>{totalUnConfirmed}</td>
        </tr>
        <tr>
          <td>Total:</td>
          <td>{totalGuest}</td>
        </tr>
      </tbody>
    </table>
  );
};
