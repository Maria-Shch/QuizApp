import classNames from 'classnames';
import clIndex from './../../../../index.module.css';
import cl from './HistoryPage.module.css';
import Button from '../../../shared/buttons/Button/Button';
import TableWithResults from '../TableWithResults/TableWithResults';

function HistoryPage() {
    return (
        <div className={classNames(clIndex.content, cl.content)}>
            <p className={classNames(clIndex.header, cl.header)}>
                История
            </p>
            <TableWithResults />
            <div className={clIndex.div_buttons}>
                <Button className='ButtonQuestionPage' id='index' value='На главную' path='/index' />
                <Button className='ButtonQuestionPage' id='quiz' value='Квиз' path='quiz/1' />
            </div>
        </div>
    );
}

export default HistoryPage;
