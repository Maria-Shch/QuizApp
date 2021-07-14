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
      questionNumber: props.match.params.numberQuestion,
      nextQuestion: Number(props.match.params.numberQuestion) + 1,
      numberOfQuestions: parsingQuizToQuestions(getQuizById('07e6bda')).length
    };
    this.next = this.next.bind(this);
    this.valueOfButton = this.valueOfButton.bind(this);
  }

  //При достижении последнего вопроса в квизе значение кнопки меняется с 'Дальше' на 'Закончить'
  valueOfButton() {
    if (this.state.questionNumber < this.state.numberOfQuestions) return 'Дальше';
    else return 'Закончить';
  }

  next() {
    this.setState({
      questionNumber: this.state.nextQuestion,
      nextQuestion: Number(this.state.questionNumber) + 2
    });
    //При достижении последнего вопроса нажатие кнопки будет перенаправлять на страницу с результатом
    if (this.state.nextQuestion <= this.state.numberOfQuestions) window.history.pushState(null, null, this.state.nextQuestion);
    else this.props.history.push('./../result');
  }

  render() {
    const quizId = '07e6bda';
    const quiz = getQuizById(quizId);
    const questions = parsingQuizToQuestions(quiz);

    const indexArray = this.state.questionNumber - 1;
    const numberOfQuestions = questions.length;
    return (
      <div className={classNames(clIndex.content, cl.content)}>
        <p className={classNames(clIndex.header, cl.header)}>
          {this.state.questionNumber}/{numberOfQuestions}. {questions[indexArray].question}
        </p>
        <PossibleAnswers answers={questions[indexArray].answers} />
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
