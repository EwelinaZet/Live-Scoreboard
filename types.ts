export interface IMatch {
    id: string;
    homeTeam: string;
    awayTeam: string;
    homeTeamScore: number;
    awayTeamScore: number;
    startMatchTime: number;
    scoreUpdate(homeTeamScore: number, awayTeamScore: number): void;
    countTotalScore(): number;
}