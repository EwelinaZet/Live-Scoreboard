import { ScoreBoard } from './ScoreBoard.ts'

const scoreboard = new ScoreBoard();

// TEST 1: Start matches
const id1 = scoreboard.matchStart('Real Madryt', 'FC Barcelona');
const id2 = scoreboard.matchStart('Manchester United', 'Bayern Monachium');
console.log('TEST 1: Check matches list.', scoreboard.matchesList);

// TEST 2: Start matches with existing match - catch error
try {
    scoreboard.matchStart('Real Madryt', 'FC Barcelona');
} catch (error) {
    console.error('TEST 2:', error);
}

// TEST 3: Start matches with empty value - catch error
try {
    scoreboard.matchStart('', 'Liverpool');
} catch (error) {
    console.error('TEST 3:', error);
}

// TEST 4: Start matches with same values - catch error
try {
    scoreboard.matchStart('Liverpool', 'Liverpool');
} catch (error) {
    console.error('TEST 4:', error);
}


// TEST 5: Update scores and check summary
scoreboard.scoreUpdate(id1, 0, 5);
scoreboard.scoreUpdate(id2, 10, 2);

console.log('TEST 5: Check updated matches list', scoreboard.matchesList);
console.log('TEST 5: Chack summary of games in progress:', scoreboard.matchesSummary());

// TEST 6: Update scores with not a number value - catch error
try {
    scoreboard.scoreUpdate(id1, 'one', 3);
} catch (error) {
    console.error('TEST 6:', error);
}

// TEST 7: Update scores with negative value - catch error
try {
    scoreboard.scoreUpdate(id1, -1, 3);
} catch (error) {
    console.error('TEST 7:', error);
}

// TEST 8: Finish a match
scoreboard.finishMatch(id1);
console.log('TEST 8: Check updated matches list', scoreboard.matchesList);
console.log('TEST 8: Game id1 finished:', scoreboard.matchesSummary());

scoreboard.finishMatch(id2);
console.log('TEST 8: Check updated matches list', scoreboard.matchesList);
console.log('TEST 8: Game id2 finished:', scoreboard.matchesSummary());

// TEST 9: Finish a non-existent match - catch error
try {
    scoreboard.finishMatch('non-existent');
  } catch (error) {
    console.error('TEST 9:', error);
  }
