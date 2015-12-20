/// <reference path="../typings/mocha/mocha.d.ts" />
var bowlingGameCalculator_1 = require('../src/bowlingGameCalculator');
describe('BowlingGameCalculator', function () {
    beforeEach(function () {
    });
    describe('bowling game calculation', function () {
        it('should score 0 for a gutter', function () {
            var game = new bowlingGameCalculator_1["default"]();
            for (var i = 0; i < 20; i++) {
                game.roll(0);
            }
        });
    });
});
