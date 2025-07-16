import type { IMatch } from './types';

export class Match implements IMatch {
    public id: string;
    public homeTeam: string;
    public awayTeam: string;
    public homeTeamScore: number;
    public awayTeamScore: number;
    public startMatchTime: number;

    constructor (homeTeam: string, awayTeam: string) {
        if (homeTeam === awayTeam) throw new Error('homeTeam and awayTeam can not be the same.');
        if (!homeTeam || !awayTeam) throw new Error('Plaese add homeTeam and awayTeam.');
    
        this.id = `${homeTeam}-${awayTeam}`
        this.homeTeam = homeTeam;
        this.awayTeam = awayTeam;
        this.homeTeamScore = 0;
        this.awayTeamScore = 0;
        this.startMatchTime = Date.now();
    }

    scoreUpdate(homeTeamScore: number, awayTeamScore: number) {
        if (
            typeof homeTeamScore !== 'number' || typeof awayTeamScore !== 'number'
          ) {
            throw new Error('Please provide a numeric score value.');
          }
          if (
            homeTeamScore < 0 || awayTeamScore < 0
          ) {
            throw new Error('Please provide a positive score value.');
          }
        this.homeTeamScore = homeTeamScore;
        this.awayTeamScore = awayTeamScore;
    }

    countTotalScore() {
        return this.homeTeamScore + this.awayTeamScore;
    }
}