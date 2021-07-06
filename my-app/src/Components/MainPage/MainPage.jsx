import cl from './MainPage.module.css';
import Button from '../Button/Button.jsx';

function MainPage() {
  return (
    <div className={cl.content}>
      <p className={cl.header}>QuizApp</p>
      <div className={cl.buttons}>
        <Button className='ButtonMainPage' id='quiz' value='Квиз' path='quiz/1'/>
        <Button className='ButtonMainPage' id='history' value='История' path='history'/>
      </div>
    </div>
  );
}

export default MainPage;
