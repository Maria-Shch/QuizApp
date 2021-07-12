import classNames from 'classnames';
import clIndex from './../../../index.module.css';
import cl from './MainPage.module.css';
import Button from '../../shared/buttons/Button/Button.jsx';

function MainPage() {
  return (
    <div className={classNames(clIndex.content, cl.content)}>
      <p className={classNames(clIndex.header, cl.header)}>QuizApp</p>
      <div className={clIndex.div_buttons}>
        <Button className='ButtonMainPage' id='quiz' value='Квиз' path='quiz/1'/>
        <Button className='ButtonMainPage' id='history' value='История' path='history'/>
      </div>
    </div>
  );
}

export default MainPage;
