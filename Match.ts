import type { IMatch } from './types';

class Match implements IMatch {
    public id: string;
    public homeTeam: string;
    public awayTeam: string;
    public homeTeamScore: number;
    public awayTeamScore: number;

    constructor (homeTeam: string, awayTeam: string) {
        this.id = `${homeTeam}-${awayTeam}`
        this.homeTeam = homeTeam;
        this.awayTeam = awayTeam;
        this.homeTeamScore = 0;
        this.awayTeamScore = 0;
    }
}

module.exports = { Match };