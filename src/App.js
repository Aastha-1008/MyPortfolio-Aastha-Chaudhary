import './App.css';
import Front from './Components/front/front';
import Sidebar from './Components/sidebar/sidebar';

function App() {
  return (
    <div className="App">
      <div className='sideSection'>
        <Sidebar/>
      </div>
      <div className='frontSection'>
        <Front/>
      </div>
    </div>
  );
}

export default App;
