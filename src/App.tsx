import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';

import { fas } from '@fortawesome/free-solid-svg-icons'
import Button from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
import Icon from './components/Icon/icon'
import Transition from './components/Transition/transition'
library.add(fas)

function App() {
  const [ show, setShow ] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <Icon icon="arrow-down" theme="danger" size="5x"></Icon>
        <Menu defaultIndex='0' mode='horizontal' onSelect={(index) => { console.log(index); }} defaultOpenSubMenu={['2']}>
          <MenuItem>
            Link1
          </MenuItem>
          <MenuItem disabled>
            Link2
          </MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>Dropdown1</MenuItem>
            <MenuItem>Dropdown2</MenuItem>
          </SubMenu>
          <MenuItem>
            Link3
          </MenuItem>
        </Menu>
        <Button size="large" onClick={() => { setShow(!show)} }>Toggle</Button>
        <Transition
          in={show}
          timeout={300}
          animation="zoom-in-left"
        >
          <div>
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
          </div>
        </Transition>
        <Transition
          in={show}
          timeout={300}
          animation="zoom-in-top"
          wrapper
        >
          <Button btnType="primary" size="large">A Large Button</Button>
        </Transition>
      </header>
    </div>
  );
}

export default App;
