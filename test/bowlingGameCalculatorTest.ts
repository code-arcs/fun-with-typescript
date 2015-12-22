/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/expect.js/expect.js.d.ts" />
import expect = require('expect.js');

import BowlingGameCalculator from '../src/bowlingGameCalculator';

describe('BowlingGameCalculator', () => {
    var game;

    beforeEach(function () {
        game = new BowlingGameCalculator();
    });

    function rollMany(rolls, pins) {
        for (var i = 0; i < rolls; i++) {
            game.roll(pins);
        }
    }

    it('should score 0 for a gutter game', () => {
        rollMany(20, 0);
        expect(game.score()).to.be(0);
    });

    it('should score 20 for a one pin games', () => {
        rollMany(20, 1);
        expect(game.score()).to.be(20);
    });

    it('should add spare bonus', () => {
        game.roll(4);
        game.roll(6);
        rollMany(18, 4);
        expect(game.score()).to.be(4 + 6 + 4 + 18 * 4);
    });

    it('should add strike bonus', () => {
        game.roll(10);
        rollMany(18, 4);
        expect(game.score()).to.be(10 + 4 + 4 + 18 * 4);
    });

    it('should sum perfect game to 300', () => {
        rollMany(12, 10);
        expect(game.score()).to.be(300);
    });
});
