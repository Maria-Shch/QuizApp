import cl from './PossibleAnswer.module.css';

function PossibleAnswer(props) {
    return (
        <input className={cl.button} type = 'button' id = {props.id} value = {props.value}></input>
    );
}

export default PossibleAnswer;
