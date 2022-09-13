/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import TodoContainer from './components/TodoConatainer';
import AboutApp from './screens/AboutApp';
import AboutDev from './screens/AboutDev';

function App() {
  const [menu, setMenu] = useState(true);
  const [nav, setNav] = useState('todo');
  const color = menu ? 'color' : '';

  const handleClose = () => {
    setMenu(false);
  };

  const handleShow = () => {
    setMenu(true);
  };

  const setNavHome = () => {
    setNav('todo');
    setMenu(false);
  };

  const setNavAbout = () => {
    setNav('aboutApp');
  };

  const setNavAboutDev = () => {
    setNav('aboutDev');
  };

  const showNav = () => {
    if (nav === 'todo') {
      return (
        <TodoContainer />
      );
    } if (nav === 'aboutApp') {
      return <AboutApp />;
    } if (nav === 'aboutDev') {
      return <AboutDev />;
    }
    return <TodoContainer />;
  };

  const showMenu = () => {
    if (menu && nav === 'todo') {
      return (
        <>
          <FontAwesomeIcon className="icon" icon={solid('close')} size="2x" color="red" onClick={handleClose} />
          <div className="menu">
            <p onClick={setNavHome} className="home">Home</p>
            <p onClick={setNavAbout} className="home">About</p>
          </div>
        </>
      );
    } if (menu && (nav === 'aboutApp' || nav === 'aboutDev')) {
      return (
        <>
          <FontAwesomeIcon className="icon" icon={solid('left-long')} size="2x" color="green" onClick={setNavHome} />
          <div className="menu">
            <p onClick={setNavAbout} className="home">About App</p>
            <p onClick={setNavAboutDev} className="home">About Dev</p>
          </div>
        </>
      );
    }

    return (
      <FontAwesomeIcon onClick={handleShow} className="icon" icon={solid('bars')} color="black" size="2x" />
    );
  };
  return (
    <div className="appContainer">
      <div className={`appContainerRight ${color}`}>
        {showMenu()}
      </div>
      <div className="appContainerLeft">
        {showNav()}
      </div>
    </div>
  );
}

export default App;
