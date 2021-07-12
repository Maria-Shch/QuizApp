import classNames from 'classnames';
import cl from './Button.module.css';
import clMainPage from './ButtonMainPage.module.css';
import clQuestionPage from './ButtonQuestionPage.module.css';

function Button(props) {
    return (
        <form action={props.path}>
            <button 
                className={classNames(cl.button, defineButtonClassName(props.className))} 
                id = {props.id} 
                type = "submit">
                    {props.value}
            </button>
        </form>
    );
}

export default Button;


// Так как для одного и того же компонента Button на страницах MainPage и QuestionPage я использую разные стили,
// то я передаю имя файла с нужными стилями через props, а затем с помощью функции ButtonClassName определяю, 
// какой стиль необходимо использовать для каждого отдельного компонента.
function defineButtonClassName(className) {
    if (className == 'ButtonMainPage') return clMainPage.button;
    if (className == 'ButtonQuestionPage') return clQuestionPage.button;
}