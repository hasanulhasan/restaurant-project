import { Provider } from 'react-redux';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import MainComponent from './Components/MainComponent';
import myStore from './redux/store';
import router from './Routes/Router';

function App() {
  // console.log('App.js:', myStore.getState());
  return (
    <div className="App">
      <Provider store={myStore}>
        <RouterProvider router={router}>
          <MainComponent></MainComponent>
        </RouterProvider>
      </Provider>
    </div>
  );
}

export default App;
