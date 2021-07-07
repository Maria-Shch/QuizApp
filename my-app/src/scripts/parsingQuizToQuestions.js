export function parsingQuizToQuestions(quiz) {
    let size = quiz[0].questions.length;
    let arrQuestions = [];
    for (let i = 0, serialNumber=0; i < size; i++) {
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

class Question {
    constructor(id, question,correctAnswer, answers) {
        this.id = id;
        this.question = question;
        this.correctAnswer = correctAnswer;
        this.answers = answers;
    }
}