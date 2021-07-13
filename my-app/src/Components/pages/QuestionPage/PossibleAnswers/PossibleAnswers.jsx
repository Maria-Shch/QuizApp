import cl from './PossibleAnswers.module.css';

function PossibleAnswers(props) {
    const answers = props.answers;
    let getAnswersContent = () => {
        let content = [];
        for (let i = 0; i < answers.length; i++) {
            content.push(
                <div className={cl.form_radio_btn}>
                    <input id={answers[i]} type="radio" name="radio" value={answers[i]} />
                    <label htmlFor={answers[i]}>{answers[i]}</label>
                </div>
            );
        }
        return content;
    };
    return (
        <div className={cl.possibleAnswers}>
            {getAnswersContent()}
        </div >
    );
}

export default PossibleAnswers;
