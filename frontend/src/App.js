import { Home } from './Components/components';
import './App.css';
import { SideBar } from './Components/components';

function App() {
  return (
    <div id="App">
      <div id="MainApp">
        <SideBar />
        <Home/>
      </div>
    </div>
  );
}

export default App;
