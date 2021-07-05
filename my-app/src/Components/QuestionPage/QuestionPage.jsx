import cl from './QuestionPage.module.css';
import Button from './../Button/Button';
import PossibleAnswer from './PossibleAnswer';
import { parsingOfQuestions } from './../../scripts/parsingOfQuestions.js'

function QuestionPage() {
  let questions = parsingOfQuestions();

  // Переменная questionNumber означает индекс вопроса в массиве questions
  // Изменяя её значение, можно отображать тот или иной вопрос из массива
  let questionNumber = 0;
  
  return (
    <div className={cl.content}>
      <p className={cl.header}>
        {questions[questionNumber].serialNumber}/{questions[questionNumber].numberOfQuestions}. {questions[questionNumber].question}
      </p>
      <div className={cl.possibleAnswers}>
        <div className={cl.possibleAnswers_row}>
          <PossibleAnswer id={questions[questionNumber].answers[0]} value={questions[questionNumber].answers[0]} />
          <PossibleAnswer id={questions[questionNumber].answers[1]} value={questions[questionNumber].answers[1]} />
        </div>
        <div className={cl.possibleAnswers_row}>
          <PossibleAnswer id={questions[questionNumber].answers[2]} value={questions[questionNumber].answers[2]} />
          <PossibleAnswer id={questions[questionNumber].answers[3]} value={questions[questionNumber].answers[3]} />
        </div>
      </div>
      <div className={cl.div_next}>
        <Button className='ButtonQuestionPage' id='next' value='Дальше' path='next' />
      </div>
      <div className={cl.div_buttons}>
        <Button className='ButtonQuestionPage' id='index' value='На главную' path='index' />
        <Button className='ButtonQuestionPage' id='history' value='История' path='history' />
      </div>
    </div>
  );
}

export default QuestionPage;
