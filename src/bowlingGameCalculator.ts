export default class BowlingGameCalculator {
    private scores:number[] = [];
    private current:number = 0;

    roll(pins:number):void {
        this.scores[this.current++] = pins;
    }

    score():number {
        return this.scores.reduce((prev, curr) => prev + curr) + this.bonus();
    }

    private bonus():number {
        var bonus:number = 0;
        var i:number = 0;

        for (var frame = 1/* skip last frame*/; frame < 10; frame++) {
            if (this.scores[i] === 10) {
                bonus += this.scores[i + 1] + this.scores[i + 2];
                i ++;
            } else if (this.scores[i] + this.scores[i + 1] === 10) {
                bonus += this.scores[i + 2];
                i += 2;
            } else {
                i += 2;
            }
        }
        return bonus;
    }
}
