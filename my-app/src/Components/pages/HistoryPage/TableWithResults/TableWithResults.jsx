import classNames from 'classnames';
import clIndex from './../../../../index.module.css';
import cl from './TableWithResults.module.css';
import { parsingHistoryFromFile, getQuizById, parsingQuizToQuestions } from '../../../../utils/utilsFunctions';

function TableWithResults() {
    const games = parsingHistoryFromFile();

    let getHistoryContent = () => {
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
        return content;
    };

    return (
        <div className={classNames(clIndex.content, cl.content)}>
            <table>
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Правильные ответы</th>
                        <th>Всего вопросов</th>
                    </tr>
                    {getHistoryContent()}
                </thead>
            </table>
        </div>
    );
}

export default TableWithResults;
