import cl from './QuestionPage.module.css';
import Button from './../Button/Button';
import ButtonNext from './../Button/ButtonNext';
import PossibleAnswers from './PossibleAnswers';
import { parsingOfQuestions } from './../../scripts/parsingOfQuestions.js'

function QuestionPage(props) {
  let questions = parsingOfQuestions();

  let questionNumber = props.match.params.numberQuestion;
  let indexArray = questionNumber - 1;
  let nextQuestion = Number(questionNumber) + 1;
  let numberOfQuestions = questions.length;

  return (
    <div className={cl.content}>
      <p className={cl.header}>
        {questionNumber}/{numberOfQuestions}. {questions[indexArray].question}
      </p>
      <PossibleAnswers
        id0={questions[indexArray].answers[0]} value0={questions[indexArray].answers[0]}
        id1={questions[indexArray].answers[1]} value1={questions[indexArray].answers[1]}
        id2={questions[indexArray].answers[2]} value2={questions[indexArray].answers[2]}
        id3={questions[indexArray].answers[3]} value3={questions[indexArray].answers[3]}
      />
      <div className={cl.div_next}>
        <ButtonNext question={questions[indexArray]} answers={questions[indexArray].answers} className='ButtonQuestionPage' id='next' value={valueOfButton(questionNumber, numberOfQuestions)} path={checkPath(nextQuestion, numberOfQuestions)} />
      </div>
      <div className={cl.div_buttons}>
        <Button className='ButtonQuestionPage' id='index' value='На главную' path='/../index' />
        <Button className='ButtonQuestionPage' id='history' value='История' path='history' />
      </div>
    </div>
  );
}

//При достижении последнего вопроса в квизе значение кнопки меняется с 'Дальше' на 'Закончить'
function valueOfButton(questionNumber, numberOfQuestions) {
  if (questionNumber < numberOfQuestions) return 'Дальше';
  else return 'Закончить';
}

//При достижении последнего вопроса нажатие кнопки будет перенаправлять на страницу с результатом
function checkPath(nextQuestion, numberOfQuestions) {
  if (nextQuestion <= numberOfQuestions) return nextQuestion;
  else return './../result';
}

export default QuestionPage;
