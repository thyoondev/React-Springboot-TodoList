import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleDarkMode } from '../store';
import './DarkMode.css';

const DarkMode = () => {
  const dispatch = useDispatch();
  const toggleDark = () => dispatch(toggleDarkMode());
  return (
    <label>
      <input
        onClick={toggleDark}
        class="toggle-checkbox"
        type="checkbox"
      ></input>
      <div class="toggle-slot">
        <div class="sun-icon-wrapper">
          <div
            class="iconify sun-icon"
            data-icon="feather-sun"
            data-inline="false"
          ></div>
        </div>
        <div class="toggle-button"></div>
        <div class="moon-icon-wrapper">
          <div
            class="iconify moon-icon"
            data-icon="feather-moon"
            data-inline="false"
          ></div>
        </div>
      </div>
    </label>
  );
};

export default DarkMode;
