import classNames from 'classnames';
import clIndex from './../../../../index.module.css';
import cl from './TableWithResults.module.css';
import { getHistoryFromLocalStorage, getQuizById, parsingQuizToQuestions } from '../../../../utils/utilsFunctions';

function TableWithResults() {
    const games = getHistoryFromLocalStorage();

    let content = [];

    function getHistoryContent() {
        if (games.length == 0) content.push(<p className={cl.info}> Будьте первым, кто пройдёт квиз! </p>);

        else {
            content.push(
                <table>
                    <thead>
                        <tr>
                            <th>№</th>
                            <th>Правильные ответы</th>
                            <th>Всего вопросов</th>
                        </tr>
                        {getResults()}
                    </thead>
                </table>
            );

            if(games.length >10){
                content.push(<p className={cl.subtitle}> *Отображаются последние 10 попыток пользователей </p>);
            }
        }
        return content;
    }


    function getResults() {
        let content = [];
        for (let i = 0, number = 1; i < games.length; i++) {
            content.push(
                <tr key={i}>
                    <td key={games[i].id}>{number++}</td>
                    <td>{games[i].correctAnswers}</td>
                    <td>{parsingQuizToQuestions(getQuizById(games[i].quizId)).length}</td>
                </tr>
            );
        }

        //Урезаю количество записей в таблице до 10 для сохранения её приемлимого размера
        while (content.length > 10) content.shift();

        return content;
    }

    return (
        <div className={classNames(clIndex.content, cl.content)}>
            {getHistoryContent()}
        </div>
    );

}
export default TableWithResults;
