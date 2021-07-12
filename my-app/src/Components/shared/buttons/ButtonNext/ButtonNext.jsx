import classNames from 'classnames';
import cl from './../Button/Button.module.css';
import ButtonQuestionPage from './../Button/ButtonQuestionPage.module.css';

function ButtonNext(props) {
    function checkAnswer() {

        let currentRes = localStorage.getItem('currentRes');
        if(currentRes==null) currentRes=0;

        let correctAnswer = props.question.correctAnswer;

        if (document.getElementById(props.answers[0]).checked && props.answers[0]==correctAnswer) {
            localStorage.setItem('currentRes', ++currentRes);
        }
        if (document.getElementById(props.answers[1]).checked && props.answers[1]==correctAnswer) {
            localStorage.setItem('currentRes', ++currentRes);
        }
        if (document.getElementById(props.answers[2]).checked && props.answers[2]==correctAnswer) {
            localStorage.setItem('currentRes', ++currentRes);
        }
        if (document.getElementById(props.answers[3]).checked && props.answers[3]==correctAnswer) {
            localStorage.setItem('currentRes', ++currentRes);
        }
    }

    return (
        <form action={props.path}>
            <button 
                onClick={checkAnswer} 
                className={classNames(cl.button, ButtonQuestionPage.button)} 
                type="submit">
                    {props.value}
            </button>
        </form>
    );
}

export default ButtonNext;
