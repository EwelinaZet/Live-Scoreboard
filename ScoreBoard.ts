import type { IMatch } from './types';
import { Match } from './Match.ts';

export class ScoreBoard {
    matchesList: Array<IMatch>;

    constructor() {
        this.matchesList = [];
    }

    matchStart(homeTeam: string, awayTeam: string) {
        const match = new Match(homeTeam, awayTeam);
        this.matchesList.push(match);
        return match.id;
    }

    scoreUpdate(id: string, homeTeamScore: number, awayTeamScore:number) {
        const match = this.matchesList.find(el => el.id === id);
        if (match) match.scoreUpdate(homeTeamScore, awayTeamScore);
    }
}