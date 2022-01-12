import React from 'react';
// import Button, { ButtonType, ButtonSize } from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu defaultIndex='0' mode='vertical' onSelect={(index) => { console.log(index); }} defaultOpenSubMenu={['2']}>
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
      </header>
    </div>
  );
}

export default App;
