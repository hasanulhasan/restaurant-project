import { BrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import MainComponent from './Components/MainComponent';
import router from './Routes/Router';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}>
        <MainComponent></MainComponent>
      </RouterProvider>
    </div>
  );
}

export default App;
