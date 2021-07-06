import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import MainPage from './Components/MainPage/MainPage';
import QuestionPage from './Components/QuestionPage/QuestionPage';

function App() {
  return (
    <BrowserRouter>
      <Route path='/index' component={MainPage}/>
      <Route path='/quiz/:numberQuestion' component={QuestionPage}/>
    </BrowserRouter>
  );
}

export default App;
