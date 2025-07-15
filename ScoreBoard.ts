import type { IMatch } from './types';

class ScoreBoard {
    matchesList: Array<IMatch>;

    constructor() {
      this.matchesList = [];
    }
}

module.exports = { ScoreBoard };