import cl from './QuestionPage.module.css';
import Button from './../Button/Button';
import PossibleAnswer from './PossibleAnswer';
import { parsingOfQuestions } from './../../scripts/parsingOfQuestions.js'

function QuestionPage() {
  let questions = parsingOfQuestions();
  return (
    <div className={cl.content}>
      <p className={cl.header}>
        {questions[0].serialNumber}/{questions[0].numberOfQuestions}. {questions[0].question}
      </p>
      <div className={cl.possibleAnswers}>
        <PossibleAnswer id={questions[0].answers[0]} value={questions[0].answers[0]} />
        <PossibleAnswer id={questions[0].answers[1]} value={questions[0].answers[1]} />
        <PossibleAnswer id={questions[0].answers[2]} value={questions[0].answers[2]} />
        <PossibleAnswer id={questions[0].answers[3]} value={questions[0].answers[3]} />
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
