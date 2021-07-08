import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import MainPage from './Components/MainPage/MainPage';
import QuestionPage from './Components/QuestionPage/QuestionPage';
import ResultPage from './Components/ResultPage/ResultPage';
import HistoryPage from './Components/HistoryPage/HistoryPage';

function App() {
  return (
    <BrowserRouter>
      <Route path='/index' component={MainPage}/>
      <Route path='/quiz/:numberQuestion' component={QuestionPage}/>
      <Route path='/result' component={ResultPage}/>
      <Route path='/history' component={HistoryPage}/>
    </BrowserRouter>
  );
}

export default App;
