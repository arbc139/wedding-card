import './App.css';

import Account from './sections/Account';
import Branch from './sections/Branch';
import Introduce from './sections/Introduce';
import Map from './sections/Map';
import Readme from './sections/Readme';

function App() {
  return (
    <div className="App">
      <Readme />
      <Branch />
      <Introduce />
      <Map />
      <Account />
    </div>
  );
}

export default App;
