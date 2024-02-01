'use strict';

function Speak (words) {
    return words;
}

function Jump (a, b) {
    return a + b;
}

function Sing (song) {
    return "A song named ".concat(song.name, " sang by ").concat(song.singer);
}

var PandaWarrior = /** @class */ (function () {
    function PandaWarrior() {
        this.speak = Speak;
        this.jump = Jump;
        this.sing = Sing;
        console.log('hello world');
    }
    PandaWarrior.prototype.armour = function () {
        return true;
    };
    PandaWarrior.prototype.weapon = function () {
        return 'bamboo';
    };
    PandaWarrior.prototype.furColor = function () {
        return 'black-and-white';
    };
    PandaWarrior.prototype.shout = function (type) {
        return type === 'frined' ? 'hi would like an banoo' : 'get out of here';
    };
    return PandaWarrior;
}());

module.exports = PandaWarrior;
