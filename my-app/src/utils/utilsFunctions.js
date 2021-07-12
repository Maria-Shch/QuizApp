import Game from './classes/Game';
import Question from './classes/Question';

export function getQuizById(quizId) {
    const questions = require('../data/questions.json');
    const quiz = questions.quizes.filter(element => element.id == quizId);
    return quiz;
}

export function parsingHistoryFromFile() {
    const games = require('../data/history.json').games;
    const size = games.length;
    let arrGames = [];
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