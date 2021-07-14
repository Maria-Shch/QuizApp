import classNames from 'classnames';
import clIndex from './../../../../index.module.css';
import cl from './QuestionPage.module.css';
import Button from '../../../shared/buttons/Button/Button';
import ButtonNext from '../../../shared/buttons/ButtonNext/ButtonNext';
import PossibleAnswers from '../PossibleAnswers/PossibleAnswers';
import { getQuizById, parsingQuizToQuestions } from '../../../../utils/utilsFunctions';
import React from 'react';

class QuestionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionNumber: props.match.params.numberQuestion,
      nextQuestion: Number(props.match.params.numberQuestion) + 1
    };
    this.next = this.next.bind(this);
  }
  //При достижении последнего вопроса в квизе значение кнопки меняется с 'Дальше' на 'Закончить'
  valueOfButton(questionNumber, numberOfQuestions) {
    if (questionNumber < numberOfQuestions) return 'Дальше';
    else return 'Закончить';
  }

  //При достижении последнего вопроса нажатие кнопки будет перенаправлять на страницу с результатом
  checkPath(nextQuestion, numberOfQuestions) {
    if (this.state.nextQuestion <= numberOfQuestions) return this.state.nextQuestion;
    else return './../result';
  }

  next(path) {
    this.setState({
      questionNumber: this.state.nextQuestion,
      nextQuestion: Number(this.state.questionNumber) + 2
    });
    window.history.pushState(null, null, path);
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
            onClick={() => this.next(this.state.nextQuestion)}
            type="submit">
            Дальше
          </button>


          
          {/* <ButtonNext
            onClick={() => this.next()}
            question={questions[indexArray]}
            answers={questions[indexArray].answers}
            className='ButtonQuestionPage'
            id='next'
            value={valueOfButton(this.state.questionNumber, numberOfQuestions)}
            path={checkPath(nextQuestion, numberOfQuestions)}
          /> */}
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
