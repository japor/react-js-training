import { useContext, useRef, useState } from "react";

export const HideGuest = ({ handleHideUnConfirmed, hideUnConfirmed }) => {
  return (
    <label>
      <input type="checkbox" checked={hideUnConfirmed} onChange={handleHideUnConfirmed} /> Hide those who haven't responded
    </label>
  );
};
