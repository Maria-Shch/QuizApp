import classNames from 'classnames';
import clIndex from './../../../index.module.css';
import cl from './ResultPage.module.css';
import Button from '../../shared/buttons/Button/Button';

function ResultPage() {
  const res = localStorage.getItem('currentRes');

  return (
    <div className={classNames(clIndex.content, cl.content)}>
      <p className={classNames(clIndex.header, cl.header)}>
       Превосходно! Вы ответили на {res} вопросов из 10
      </p>
      
      <div className={clIndex.div_buttons}>
        <Button className='ButtonQuestionPage' id='quiz' value='Квиз' path='/quiz/1' />
        <Button className='ButtonQuestionPage' id='history' value='История' path='history' />
      </div>
    </div>
  );
}

export default ResultPage;
