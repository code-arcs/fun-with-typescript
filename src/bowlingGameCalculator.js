var BowlingGameCalculator = (function () {
    function BowlingGameCalculator() {
        this.scores = [];
        this.current = 0;
    }
    BowlingGameCalculator.prototype.roll = function (pins) {
        this.scores[this.current++] = pins;
    };
    BowlingGameCalculator.prototype.score = function () {
        return this.scores.reduce(function (prev, curr) { return prev + curr; }) + this.bonus();
    };
    BowlingGameCalculator.prototype.bonus = function () {
        var bonus = 0;
        var i = 0;
        for (var frame = 1; frame < 10; frame++) {
            if (this.scores[i] === 10) {
                bonus += this.scores[i + 1] + this.scores[i + 2];
                i++;
            }
            else if (this.scores[i] + this.scores[i + 1] === 10) {
                bonus += this.scores[i + 2];
                i += 2;
            }
            else {
                i += 2;
            }
        }
        return bonus;
    };
    return BowlingGameCalculator;
})();
exports.__esModule = true;
exports["default"] = BowlingGameCalculator;
