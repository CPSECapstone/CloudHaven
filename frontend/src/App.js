import './App.css';
import { Home, SideBar } from './Components/components';

function App() {
  return (
    <div id="App">
      <div id="MainApp">
        <SideBar />
        <div id="PageFrame">
          <div id="MainContent">
            <Home/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
