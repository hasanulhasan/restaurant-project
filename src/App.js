import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainComponent from './Components/MainComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainComponent></MainComponent>
      </BrowserRouter>
    </div>
  );
}

export default App;
