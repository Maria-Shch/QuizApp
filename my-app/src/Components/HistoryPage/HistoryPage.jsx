import cl from './HistoryPage.module.css';
import Button from './../Button/Button';
import TableWithResults from './TableWithResults';

function HistoryPage() {
    return (
        <div className={cl.content}>
            <p className={cl.header}>
                История
            </p>
            <TableWithResults />
            <div className={cl.div_buttons}>
                <Button className='ButtonQuestionPage' id='index' value='На главную' path='/index' />
                <Button className='ButtonQuestionPage' id='quiz' value='Квиз' path='quiz/1' />
            </div>
        </div>
    );
}

export default HistoryPage;
