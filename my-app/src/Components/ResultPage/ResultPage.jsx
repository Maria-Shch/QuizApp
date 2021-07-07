import cl from './ResultPage.module.css';
import Button from './../Button/Button';

function ResultPage(props) {
  const res = localStorage.getItem('currentRes');

  return (
    <div className={cl.content}>
      <p className={cl.header}>
       Превосходно! Вы ответили на {res} вопросов из 10
      </p>
      
      <div className={cl.div_buttons}>
        <Button className='ButtonQuestionPage' id='quiz' value='Квиз' path='/quiz/1' />
        <Button className='ButtonQuestionPage' id='history' value='История' path='history' />
      </div>
    </div>
  );
}

export default ResultPage;
