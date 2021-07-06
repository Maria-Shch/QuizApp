import cl from './QuestionPage.module.css';
import Button from './../Button/Button';
import PossibleAnswer from './PossibleAnswer';
import { parsingOfQuestions } from './../../scripts/parsingOfQuestions.js'

function QuestionPage(props) {
  let questions = parsingOfQuestions();

  let questionNumber = props.match.params.numberQuestion;
  let indexArray = questionNumber-1;
  let nextQuestion = Number(questionNumber)+1;
  let numberOfQuestions = questions.length;

  return (
    <div className={cl.content}>
      <p className={cl.header}>
        {questionNumber}/{numberOfQuestions}. {questions[indexArray].question}
      </p>
      <div className={cl.possibleAnswers}>
        <div className={cl.possibleAnswers_row}>
          <PossibleAnswer id={questions[indexArray].answers[0]} value={questions[indexArray].answers[0]} />
          <PossibleAnswer id={questions[indexArray].answers[1]} value={questions[indexArray].answers[1]} />
        </div>
        <div className={cl.possibleAnswers_row}>
          <PossibleAnswer id={questions[indexArray].answers[2]} value={questions[indexArray].answers[2]} />
          <PossibleAnswer id={questions[indexArray].answers[3]} value={questions[indexArray].answers[3]} />
        </div>
      </div>
      <div className={cl.div_next}>
        <Button className='ButtonQuestionPage' id='next' value={valueOfButton(questionNumber, numberOfQuestions)} path = {checkPath(nextQuestion, numberOfQuestions)} />
      </div>
      <div className={cl.div_buttons}>
        <Button className='ButtonQuestionPage' id='index' value='На главную' path='/../index' />
        <Button className='ButtonQuestionPage' id='history' value='История' path='history' />
      </div>
    </div>
  );
}

//При достижении последнего вопроса в квизе значение кнопки меняется с 'Дальше' на 'Закончить'
function valueOfButton(questionNumber, numberOfQuestions){
  if (questionNumber < numberOfQuestions) return 'Дальше';
  else return 'Закончить';
}

//При достижении последнего вопроса нажатие кнопки будет перенаправлять на страницу с результатом
function checkPath(nextQuestion, numberOfQuestions){
  if (nextQuestion <= numberOfQuestions) return nextQuestion;
  else return './../result';
}

export default QuestionPage;
