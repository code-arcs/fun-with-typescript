/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/expect.js/expect.js.d.ts" />
var expect = require('expect.js');
var bowlingGameCalculator_1 = require('../src/bowlingGameCalculator');
describe('BowlingGameCalculator', function () {
    var game;
    beforeEach(function () {
        game = new bowlingGameCalculator_1["default"]();
    });
    function rollMany(rolls, pins) {
        for (var i = 0; i < rolls; i++) {
            game.roll(pins);
        }
    }
    it('should score 0 for a gutter game', function () {
        rollMany(20, 0);
        expect(game.score()).to.be(0);
    });
    it('should score 20 for a one pin games', function () {
        rollMany(20, 1);
        expect(game.score()).to.be(20);
    });
    it('should add spare bonus', function () {
        game.roll(4);
        game.roll(6);
        rollMany(18, 4);
        expect(game.score()).to.be(4 + 6 + 4 + 18 * 4);
    });
    it('should add strike bonus', function () {
        game.roll(10);
        rollMany(18, 4);
        expect(game.score()).to.be(10 + 4 + 4 + 18 * 4);
    });
    it('should sum perfect game to 300', function () {
        rollMany(12, 10);
        expect(game.score()).to.be(300);
    });
});
