import ButtonMainPage from './ButtonMainPage.module.css';
import ButtonQuestionPage from './ButtonQuestionPage.module.css';

function ButtonNext(props) {
    function checkAnswer() {
        let currentRes = localStorage.getItem('currentRes');
        if(currentRes==null) currentRes=0;
        let correctAnswer = props.question.correctAnswer;
        if (document.getElementById(props.answers[0]).checked) {
            if (props.answers[0]==correctAnswer){
                localStorage.setItem('currentRes', ++currentRes);
            }
        }
        if (document.getElementById(props.answers[1]).checked) {
            if (props.answers[1]==correctAnswer){
                localStorage.setItem('currentRes', ++currentRes);
            }
        }
        if (document.getElementById(props.answers[2]).checked) {
            if (props.answers[2]==correctAnswer){
                localStorage.setItem('currentRes', ++currentRes);
            }
        }
        if (document.getElementById(props.answers[3]).checked) {
            if (props.answers[3]==correctAnswer){
                localStorage.setItem('currentRes', ++currentRes);
            }
        }
    }

    return (
        <form action={props.path}>
            <button onClick={checkAnswer} className={defineButtonClassName(props)} id={props.id} type="submit">{props.value}</button>
        </form>
    );
}

export default ButtonNext;


// Так как для одного и того же компонента Button на страницах MainPage и QuestionPage я использую разные стили,
// то я передаю имя файла с нужными стилями через props, а затем с помощью функции ButtonClassName определяю, 
// какой стиль необходимо использовать для каждого отдельного компонента.
function defineButtonClassName(props) {
    if (props.className == 'ButtonMainPage') return ButtonMainPage.button;
    if (props.className == 'ButtonQuestionPage') return ButtonQuestionPage.button;
}