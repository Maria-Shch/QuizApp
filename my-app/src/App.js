import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from './components/pages/MainPage/MainPage'
import QuestionPage from './components/pages/QuestionPage/QuestionPage/QuestionPage';
import ResultPage from './components/pages/ResultPage/ResultPage';
import HistoryPage from './components/pages/HistoryPage/HistoryPage/HistoryPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/index" component={MainPage} />
        <Route path="/quiz/:numberQuestion" component={QuestionPage} />
        <Route exact path="/result" component={ResultPage} />
        <Route exact path="/history" component={HistoryPage} />
      </Switch>
    </BrowserRouter >
  );
}

export default App;
