import './App.css';

import Branch from './sections/Branch';
import Introduce from './sections/Introduce';
import Readme from './sections/Readme';

function App() {
  return (
    <div className="App">
      <Readme />
      <Branch />
      <Introduce />
    </div>
  );
}

export default App;
