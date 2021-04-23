import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleDarkMode } from '../store/Action';
import './DarkMode.css';

const DarkMode = () => {
  const dispatch = useDispatch();
  const toggleDark = () => dispatch(toggleDarkMode());
  return (
    <label>
      <input
        onClick={toggleDark}
        className="toggle-checkbox"
        type="checkbox"
      ></input>
      <div className="toggle-slot">
        <div className="sun-icon-wrapper">
          <div
            className="iconify sun-icon"
            data-icon="feather-sun"
            data-inline="false"
          ></div>
        </div>
        <div className="toggle-button"></div>
        <div className="moon-icon-wrapper">
          <div
            className="iconify moon-icon"
            data-icon="feather-moon"
            data-inline="false"
          ></div>
        </div>
      </div>
    </label>
  );
};

export default DarkMode;
