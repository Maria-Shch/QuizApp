import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import MainPage from './Components/MainPage/MainPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path='/' component={MainPage}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
