import classNames from 'classnames';
import clIndex from './../../../index.module.css';
import cl from './ResultPage.module.css';
import Button from '../../shared/buttons/Button/Button';
import { getQuizById, parsingQuizToQuestions } from '../../../utils/utilsFunctions';

function ResultPage(props) {
  const correctAnswers = props.result;
  const quizId = props.quizId;
  const numberOfQuestions = parsingQuizToQuestions(getQuizById(quizId)).length;
  const percentageResult = correctAnswers * 100 / numberOfQuestions;

  let getText = (correctAnswers, percentageResult) => {
    if (percentageResult < 50) {
      return (
        <p className={classNames(clIndex.header, cl.header)}>
          Попробуйте ещё раз. Из {numberOfQuestions} вопросов вы ответили на {correctAnswers}.
        </p>
      );
    }
    else {
      return (
        <p className={classNames(clIndex.header, cl.header)}>
          Превосходно!  Из {numberOfQuestions} вопросов вы ответили на {correctAnswers}.
        </p>
      )
    }
  }

  return (
    <div className={classNames(clIndex.content, cl.content)}>
      {getText(correctAnswers, percentageResult)}
      <div className={clIndex.div_buttons}>
        <Button className='ButtonQuestionPage' id='quiz' value='Квиз' path='/quiz/1' />
        <Button className='ButtonQuestionPage' id='history' value='История' path='history' />
      </div>
    </div>
  );
}

export default ResultPage;
