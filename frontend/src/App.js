import './App.css';
import { Home, SideBar, TopBar } from './Components/components';

function App() {
  return (
    <div id="App">
      <div id="MainApp">
        <SideBar />
        <div id="PageFrame">
          <TopBar />
          <div id="MainContent">
            <Home/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
