import cl from './MainPage.module.css';
import Button from './Button.jsx';

function MainPage() {
  return (
    <div className={cl.content}>
      <p className={cl.header}>QuizApp</p>
      <div className={cl.buttons}>
        <Button id='quiz' value='Квиз' path='quiz'/>
        <Button id='history' value='История' path='history'/>
      </div>
    </div>
  );
}

export default MainPage;
