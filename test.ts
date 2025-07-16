import { ScoreBoard } from './ScoreBoard.ts'

const scoreboard = new ScoreBoard();

// TEST 1: Start matches
const id1 = scoreboard.matchStart('Real Madryt', 'FC Barcelona');
const id2 = scoreboard.matchStart('Manchester United', 'Bayern Monachium');

console.log('Check matches list', scoreboard.matchesList);

// TEST 2: Update scores
scoreboard.scoreUpdate(id1, 0, 5);
scoreboard.scoreUpdate(id2, 10, 2);

console.log('Check updated matches list', scoreboard.matchesList);
console.log('Chack summary of games in progress:', scoreboard.matchesSummary());

// TEST 3: Finish a match
scoreboard.finishMatch(id1);
console.log('Check updated matches list', scoreboard.matchesList);
console.log('Game id1 finished:', scoreboard.matchesSummary());

scoreboard.finishMatch(id2);
console.log('Check updated matches list', scoreboard.matchesList);
console.log('Game id2 finished:', scoreboard.matchesSummary());