export function parsingHistoryFromFile() {
    let games = require('./../data/history.json').games;
    let size = games.length;
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

class Game {
    constructor(id, date, quizId, correctAnswers) {
        this.id = id;
        this.date = date;
        this.quizId = quizId;
        this.correctAnswers = correctAnswers;
    }
}