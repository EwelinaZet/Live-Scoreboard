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

    finishMatch(id: string) {
        const index = this.matchesList.findIndex(el => el.id === id);
        if (index !== -1) this.matchesList.splice(index, 1);
    }

    matchesSummary() {
        return [...this.matchesList]
          .sort((a, b) => {
            const scoreA = a.countTotalScore();
            const scoreB = b.countTotalScore();
            if (scoreA !== scoreB) return scoreB - scoreA;
            return b.startMatchTime - a.startMatchTime;
          })
          .map(m => ({
            homeTeam: m.homeTeam,
            homeScore: m.homeTeamScore,
            awayTeam: m.awayTeam,
            awayScore: m.awayTeamScore,
          }));
      }
}