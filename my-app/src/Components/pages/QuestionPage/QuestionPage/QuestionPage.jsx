import classNames from 'classnames';
import clIndex from './../../../../index.module.css';
import cl from './QuestionPage.module.css';
import Button from '../../../shared/buttons/Button/Button';
import ButtonNext from '../../../shared/buttons/ButtonNext/ButtonNext';
import PossibleAnswers from '../PossibleAnswers/PossibleAnswers';
import { getQuizById, parsingQuizToQuestions } from '../../../../utils/utilsFunctions';

function QuestionPage(props) {
  const quizId = '07e6bda'; 
  const quiz = getQuizById(quizId);
  const questions = parsingQuizToQuestions(quiz);

  const questionNumber = props.match.params.numberQuestion;
  const indexArray = questionNumber - 1;
  const nextQuestion = Number(questionNumber) + 1;
  const numberOfQuestions = questions.length;

  return (
    <div className={classNames(clIndex.content, cl.content)}>
      <p className={classNames(clIndex.header, cl.header)}>
        {questionNumber}/{numberOfQuestions}. {questions[indexArray].question}
      </p>
      <PossibleAnswers answers = {questions[indexArray].answers}/>
      <div className={cl.div_next}>
        <ButtonNext 
          question={questions[indexArray]} 
          answers={questions[indexArray].answers} 
          className='ButtonQuestionPage' 
          id='next' 
          value={valueOfButton(questionNumber, numberOfQuestions)} 
          path={checkPath(nextQuestion, numberOfQuestions)} 
        />
      </div>
      <div className={clIndex.div_buttons}>
        <Button className='ButtonQuestionPage' id='index' value='На главную' path='/../index' />
        <Button className='ButtonQuestionPage' id='history' value='История' path='/../history' />
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
