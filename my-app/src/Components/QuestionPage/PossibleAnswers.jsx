import cl from './PossibleAnswers.module.css';

function PossibleAnswers(props) {
    return (
        <div className={cl.possibleAnswers}>
            <div className={cl.possibleAnswers_row}>
                <div className={cl.form_radio_btn}>
                    <input id={props.id0} type="radio" name="radio" value={props.value0} />
                    <label htmlFor={props.id0}>{props.value0}</label>
                </div>
                <div className={cl.form_radio_btn}>
                    <input id={props.id1} type="radio" name="radio" value={props.value1} />
                    <label htmlFor={props.id1}>{props.value1}</label>
                </div>
            </div>
            <div className={cl.possibleAnswers_row}>
                <div className={cl.form_radio_btn}>
                    <input id={props.id2} type="radio" name="radio" value={props.value2} />
                    <label htmlFor={props.id2}>{props.value2}</label>
                </div>
                <div className={cl.form_radio_btn}>
                    <input id={props.id3} type="radio" name="radio" value={props.value3} />
                    <label htmlFor={props.id3}>{props.value3}</label>
                </div>
            </div>
        </div >
    );
}

export default PossibleAnswers;
