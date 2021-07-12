export default class Question {
    constructor(id, question,correctAnswer, answers) {
        this.id = id;
        this.question = question;
        this.correctAnswer = correctAnswer;
        this.answers = answers;
    }
}