import Game from './classes/Game';
import Question from './classes/Question';

export function getQuizById(quizId) {
    const questions = require('../data/questions.json');
    const quiz = questions.quizes.filter(element => element.id == quizId);
    return quiz;
}

export function getHistoryFromLocalStorage() {
    let history = JSON.parse(localStorage.getItem('history'));
    let arrGames = [];
    if (history != null) {
        const games = history.games;
        const size = games.length;
        for (let i = 0; i < size; i++) {
            arrGames[i] = new Game(
                games[i].id,
                games[i].date,
                games[i].quizId,
                games[i].correctAnswers
            );
        }
        return arrGames;
    }
    else return arrGames;
}

export function parsingQuizToQuestions(quiz) {
    const size = quiz[0].questions.length;
    let arrQuestions = [];
    for (let i = 0, serialNumber = 0; i < size; i++) {
        arrQuestions[i] = new Question(
            quiz[0].questions[i].id,
            quiz[0].questions[i].question,
            quiz[0].questions[i].correctAnswer,
            quiz[0].questions[i].answers,
            ++serialNumber,
            size
        );
    }
    return arrQuestions;
}

export function saveToLocalStorage(objectWithResults) {
    let h = localStorage.getItem('history');
    let history;
    
    if (h === null) {
        history = {
            "games": []
        };
    }
    else  history = JSON.parse(localStorage.getItem('history'));

    history.games.push(objectWithResults);
    localStorage.setItem('history', JSON.stringify(history));
}

