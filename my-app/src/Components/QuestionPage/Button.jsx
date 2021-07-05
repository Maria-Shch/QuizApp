import cl from './Button.module.css';

function Button(props) {
    return (
        <form action={props.path}>
            <button className={cl.button} id = {props.id} type="submit">{props.value}</button>
        </form>
    );
}

export default Button;
