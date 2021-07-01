import './MainPage.css';

function MainPage() {
  return (
    <div className="header">
      <h1>QuizApp</h1>
      <div className="buttons">
        <input  type = "button" id = "quiz" value = "Квиз"></input>
        <input type = "button" id = "history" value = "История"></input>
      </div>
    </div>
  );
}

export default MainPage;
