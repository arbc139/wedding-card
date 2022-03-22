import './App.css';

import Account from './sections/Account';
import Branch from './sections/Branch';
import Introduce from './sections/Introduce';
import Map from './sections/Map';

function App() {
  return (
    <div className="App">
      <Branch />
      <Introduce />
      <Map />
      <Account />
    </div>
  );
}

export default App;
