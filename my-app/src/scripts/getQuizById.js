export function getQuizById(quizId) {
    let questions = require('./../data/questions.json');
    let quiz = questions.quizes.filter(element => element.id==quizId);
    return quiz;
}
