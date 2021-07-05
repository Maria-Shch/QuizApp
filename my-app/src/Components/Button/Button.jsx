import ButtonMainPage from './ButtonMainPage.module.css';
import ButtonQuestionPage from './ButtonQuestionPage.module.css';

function Button(props) {
    return (
        <form action={props.path}>
            <button className={DefineButtonClassName(props)} id = {props.id} type="submit">{props.value}</button>
        </form>
    );
}

export default Button;


// Так как для одного и того же компонента Button на страницах MainPage и QuestionPage я использую разные стили,
// то я передаю имя файла с нужными стилями через props, а затем с помощью функции ButtonClassName определяю, 
// какой стиль необходимо использовать для каждого отдельного компонента.
function DefineButtonClassName(props) {
    if (props.className=='ButtonMainPage') return ButtonMainPage.button;
    if (props.className=='ButtonQuestionPage') return ButtonQuestionPage.button;
}