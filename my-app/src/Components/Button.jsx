import cl from './Button.module.css';

function Button(props) {
    return (
        <input className={cl.button} type = 'button' id = {props.id} value = {props.value}></input>
    );
}

export default Button;
