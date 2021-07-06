export function parsingOfQuestions() {
    let questions = require('./../data/questions.json');
    let size = questions.quizes[0].questions.length;
    let arrQuestions = [];
    for (let i = 0, serialNumber=0; i < size; i++) {
        arrQuestions[i] = new Question(
            questions.quizes[0].questions[i].id, 
            questions.quizes[0].questions[i].question,
            questions.quizes[0].questions[i].correctAnswer, 
            questions.quizes[0].questions[i].answers,
            ++serialNumber,
            size
        );
    } 
    return arrQuestions;
}

class Question {
    constructor(id, question,correctAnswer, answers) {
        this.id = id;
        this.question = question;
        this.correctAnswer = correctAnswer;
        this.answers = answers;
    }
}