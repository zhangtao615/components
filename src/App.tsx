import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={(e) => {e.preventDefault(); alert(123)}}> Hello </Button>
        <Button className="custom" disabled> Disabled Button </Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}> Large Primary </Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}> Small Danger </Button>
        <Button btnType={ButtonType.Link} href="https://www.izuiyou.com" target="_blank"> Link Button </Button>
        <Button btnType={ButtonType.Link} href="https://www.izuiyou.com" disabled> Disabled Link </Button>
      </header>
    </div>
  );
}

export default App;
