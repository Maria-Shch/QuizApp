import './App.css';

import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import MainPage from './components/pages/MainPage/MainPage'
import QuestionPage from './components/pages/QuestionPage/QuestionPage/QuestionPage';
import ResultPage from './components/pages/ResultPage/ResultPage';
import HistoryPage from './components/pages/HistoryPage/HistoryPage/HistoryPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      quizId: '07e6bda'
    };
    this.setResult = this.setResult.bind(this);
  }
  setResult(result) {
    this.setState({ result: result });
  }
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/index" component={MainPage} />
          <Route path="/quiz/:numberQuestion" render={(props) => <QuestionPage quizId={this.state.quizId} setResult={this.setResult} {...props}/>} />
          <Route exact path="/result"  render={() => <ResultPage result={this.state.result} quizId={this.state.quizId}/>} />
          <Route exact path="/history" component={HistoryPage} />
        </Switch>
      </HashRouter >
    );
  }
}

export default App;