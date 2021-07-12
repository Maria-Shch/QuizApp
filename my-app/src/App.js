import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import MainPage from './components/pages/MainPage/MainPage'
import QuestionPage from './components/pages/QuestionPage/QuestionPage/QuestionPage';
import ResultPage from './components/pages/ResultPage/ResultPage';
import HistoryPage from './components/pages/HistoryPage/HistoryPage/HistoryPage';

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
