/// <reference path="../typings/mocha/mocha.d.ts" />
import BowlingGameCalculator from '../src/bowlingGameCalculator';

describe('BowlingGameCalculator', () => {
    beforeEach(function () {
    });

    describe('bowling game calculation', () => {
        it('should score 0 for a gutter', () => {

            var game = new BowlingGameCalculator();

            for (var i = 0; i < 20; i++) {
                game.roll(0);
            }

        });
    });
});
