import classNames from 'classnames';
import clIndex from './../../../../index.module.css';
import cl from './QuestionPage.module.css';
import Button from '../../../shared/buttons/Button/Button';
import clButton from './../../../shared/buttons/Button/Button.module.css';
import ButtonQuestionPage from './../../../shared/buttons/Button/ButtonQuestionPage.module.css';
import PossibleAnswers from '../PossibleAnswers/PossibleAnswers';
import { getQuizById, parsingQuizToQuestions } from '../../../../utils/utilsFunctions';
import React from 'react';

class QuestionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentResult: 0,
      questionNumber: props.match.params.numberQuestion,
      nextQuestion: Number(props.match.params.numberQuestion) + 1,
      indexArray: Number(props.match.params.numberQuestion) - 1,
      questions: parsingQuizToQuestions(getQuizById('07e6bda')),
      numberOfQuestions: parsingQuizToQuestions(getQuizById('07e6bda')).length
    };
    this.next = this.next.bind(this);
    this.valueOfButton = this.valueOfButton.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
  }

  //При достижении последнего вопроса в квизе значение кнопки меняется с 'Дальше' на 'Закончить'
  valueOfButton() {
    if (this.state.questionNumber < this.state.numberOfQuestions) return 'Дальше';
    else return 'Закончить';
  }

  checkAnswer() {
    let correctAnswer = this.state.questions[this.state.indexArray].correctAnswer;
    let possibleAnswers = this.state.questions[this.state.indexArray].answers;
    let res = this.state.currentResult;

    for (let i = 0; i < possibleAnswers.length; i++) {
      if (document.getElementById(possibleAnswers[i]).checked && possibleAnswers[i] == correctAnswer) {
        res++;
      }
      document.getElementById(possibleAnswers[i]).checked = false;
    }
    return res;
  }

  next() {
    this.setState({
      indexArray: Number(this.state.indexArray) + 1,
      questionNumber: Number(this.state.questionNumber) + 1,
      nextQuestion: Number(this.state.nextQuestion) + 1,
      currentResult: this.checkAnswer()
    });
    
    //При достижении последнего вопроса нажатие кнопки будет перенаправлять на страницу с результатом
    if (this.state.nextQuestion <= this.state.numberOfQuestions) window.history.pushState(null, null, this.state.nextQuestion);
    else this.props.history.push('./../result');
  }

  render() {
    return (
      <div className={classNames(clIndex.content, cl.content)}>
        <p className={classNames(clIndex.header, cl.header)}>
          {this.state.questionNumber}/{this.state.numberOfQuestions}. {this.state.questions[this.state.indexArray].question}
        </p>
        <PossibleAnswers answers={this.state.questions[this.state.indexArray].answers} />
        <div className={cl.div_next}>
          <button
            className={classNames(clButton.button, ButtonQuestionPage.button)}
            onClick={() => this.next()}
            type="submit">
            {this.valueOfButton()}
          </button>
        </div>
        <div className={clIndex.div_buttons}>
          <Button className='ButtonQuestionPage' id='index' value='На главную' path='/../index' />
          <Button className='ButtonQuestionPage' id='history' value='История' path='/../history' />
        </div>
      </div>
    );
  }
}



export default QuestionPage;
