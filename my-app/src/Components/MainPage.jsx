import cl from './MainPage.module.css';

function MainPage() {
  return (
    <div className={cl.content}>
      <p className={cl.header}>QuizApp</p>
      <div className={cl.buttons}>
        <input  type = "button" id = "quiz" value = "Квиз"></input>
        <input type = "button" id = "history" value = "История"></input>
      </div>
    </div>
  );
}

export default MainPage;
