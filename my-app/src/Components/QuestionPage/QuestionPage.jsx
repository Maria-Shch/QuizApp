import cl from './QuestionPage.module.css';
import Button from './Button';
import PossibleAnswer from './PossibleAnswer';

function QuestionPage() {
  return (
    <div className={cl.content}>
      <p className={cl.header}>1/5. Сколько игроков в команде по водному поло?</p>
      <div className={cl.possibleAnswers}>
          <PossibleAnswer id='5' value='5'/>
          <PossibleAnswer id='6' value='6'/>
          <PossibleAnswer id='7' value='7'/>
          <PossibleAnswer id='8' value='8'/>
      </div>
      <div className={cl.div_next}>
        <Button id='next' value='Дальше' path='next'/>
      </div>
      <div className={cl.div_buttons}>
         <Button id='index' value='На главную' path='index'/>
         <Button id='history' value='История' path='history'/>
      </div>
    </div>
  );
}

export default QuestionPage;
