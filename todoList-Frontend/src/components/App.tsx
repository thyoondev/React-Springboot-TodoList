import React from 'react';
import Template from './Template';
import TodoHead from './todoHead/TodoHead';
import TodoList from './todoContainer/TodoList';
import './App.css';
import { useSelector } from 'react-redux';

const App = () => {
  const isDarkModeActive: boolean = useSelector((store: any) => store.isDarkModeActive);
  return (
    <>
      <section
        style={
          isDarkModeActive
            ? { background: '#424642', transition: 'background 2s' }
            : { background: '#aeddef', transition: 'background 2s' }
        }
      >
        <Template>
          <TodoHead />
          <TodoList />
        </Template>
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>
      </section>
    </>
  );
};
export default App;
