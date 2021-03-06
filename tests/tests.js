var piglow = require('piglow');
var expect = require('chai').expect;
var sinon = require('sinon');
var hoek = require('hoek');

function createBackendMock() {
    return {
        values: [],
        update: function (bytes) {
            this.values.push(hoek.clone(bytes));
        }
    };
}

var AnimationBackend = require('../lib/AnimationBackend');
var animationInterface = require('../lib/interface');
var piglowInterface = piglow.piGlowInterface;

describe('animationsBackend', function () {
    var clock, mock;

    beforeEach(function () {
        clock = sinon.useFakeTimers();
        mock = createBackendMock();
    });

    afterEach(function () {
        clock.restore();
    });

    it('should write for one loop, should call the callback', function () {
        var called = false;

        animationInterface(new AnimationBackend({}, mock))
            .set().to(piglowInterface(['ring_0'])).after('100ms')
            .set().to(piglowInterface()).after('100ms')
            .set().to(piglowInterface(['ring_1'])).after('100ms')
            .set().to(piglowInterface()).after('100ms')
            .set().to(piglowInterface(['ring_2'])).after('100ms')
            .set().to(piglowInterface()).after('100ms')
            .repeat(1)
            .start(function () {
                called = true;
            });

        clock.tick(5000);

        expect(called).to.be.true;

        expect(mock.values).to.deep.equal([
            {
                l_0_0: 255,
                l_0_1: 0,
                l_0_2: 0,
                l_0_3: 0,
                l_0_4: 0,
                l_0_5: 0,
                l_1_0: 255,
                l_1_1: 0,
                l_1_2: 0,
                l_1_3: 0,
                l_1_4: 0,
                l_1_5: 0,
                l_2_0: 255,
                l_2_1: 0,
                l_2_2: 0,
                l_2_3: 0,
                l_2_4: 0,
                l_2_5: 0
            } ,
            {
                l_0_0: 0,
                l_0_1: 0,
                l_0_2: 0,
                l_0_3: 0,
                l_0_4: 0,
                l_0_5: 0,
                l_1_0: 0,
                l_1_1: 0,
                l_1_2: 0,
                l_1_3: 0,
                l_1_4: 0,
                l_1_5: 0,
                l_2_0: 0,
                l_2_1: 0,
                l_2_2: 0,
                l_2_3: 0,
                l_2_4: 0,
                l_2_5: 0
            },
            {
                l_0_0: 0,
                l_0_1: 255,
                l_0_2: 0,
                l_0_3: 0,
                l_0_4: 0,
                l_0_5: 0,
                l_1_0: 0,
                l_1_1: 255,
                l_1_2: 0,
                l_1_3: 0,
                l_1_4: 0,
                l_1_5: 0,
                l_2_0: 0,
                l_2_1: 255,
                l_2_2: 0,
                l_2_3: 0,
                l_2_4: 0,
                l_2_5: 0
            },
            {
                l_0_0: 0,
                l_0_1: 0,
                l_0_2: 0,
                l_0_3: 0,
                l_0_4: 0,
                l_0_5: 0,
                l_1_0: 0,
                l_1_1: 0,
                l_1_2: 0,
                l_1_3: 0,
                l_1_4: 0,
                l_1_5: 0,
                l_2_0: 0,
                l_2_1: 0,
                l_2_2: 0,
                l_2_3: 0,
                l_2_4: 0,
                l_2_5: 0
            },
            {
                l_0_0: 0,
                l_0_1: 0,
                l_0_2: 255,
                l_0_3: 0,
                l_0_4: 0,
                l_0_5: 0,
                l_1_0: 0,
                l_1_1: 0,
                l_1_2: 255,
                l_1_3: 0,
                l_1_4: 0,
                l_1_5: 0,
                l_2_0: 0,
                l_2_1: 0,
                l_2_2: 255,
                l_2_3: 0,
                l_2_4: 0,
                l_2_5: 0
            },
            {
                l_0_0: 0,
                l_0_1: 0,
                l_0_2: 0,
                l_0_3: 0,
                l_0_4: 0,
                l_0_5: 0,
                l_1_0: 0,
                l_1_1: 0,
                l_1_2: 0,
                l_1_3: 0,
                l_1_4: 0,
                l_1_5: 0,
                l_2_0: 0,
                l_2_1: 0,
                l_2_2: 0,
                l_2_3: 0,
                l_2_4: 0,
                l_2_5: 0
            }
        ]);
    });

    it('should write for two loop, should call the callback', function () {
        var called = false;

        animationInterface(new AnimationBackend({}, mock))
            .set().to(piglowInterface(['ring_0'])).after('100ms')
            .set().to(piglowInterface()).after('100ms')
            .repeat(2)
            .start(function () {
                called = true;
            });

        clock.tick(5000);

        expect(called).to.be.true;

        expect(mock.values).to.deep.equal([
            {
                l_0_0: 255,
                l_0_1: 0,
                l_0_2: 0,
                l_0_3: 0,
                l_0_4: 0,
                l_0_5: 0,
                l_1_0: 255,
                l_1_1: 0,
                l_1_2: 0,
                l_1_3: 0,
                l_1_4: 0,
                l_1_5: 0,
                l_2_0: 255,
                l_2_1: 0,
                l_2_2: 0,
                l_2_3: 0,
                l_2_4: 0,
                l_2_5: 0
            },
            {
                l_0_0: 0,
                l_0_1: 0,
                l_0_2: 0,
                l_0_3: 0,
                l_0_4: 0,
                l_0_5: 0,
                l_1_0: 0,
                l_1_1: 0,
                l_1_2: 0,
                l_1_3: 0,
                l_1_4: 0,
                l_1_5: 0,
                l_2_0: 0,
                l_2_1: 0,
                l_2_2: 0,
                l_2_3: 0,
                l_2_4: 0,
                l_2_5: 0
            },
            {
                l_0_0: 255,
                l_0_1: 0,
                l_0_2: 0,
                l_0_3: 0,
                l_0_4: 0,
                l_0_5: 0,
                l_1_0: 255,
                l_1_1: 0,
                l_1_2: 0,
                l_1_3: 0,
                l_1_4: 0,
                l_1_5: 0,
                l_2_0: 255,
                l_2_1: 0,
                l_2_2: 0,
                l_2_3: 0,
                l_2_4: 0,
                l_2_5: 0
            },
            {
                l_0_0: 0,
                l_0_1: 0,
                l_0_2: 0,
                l_0_3: 0,
                l_0_4: 0,
                l_0_5: 0,
                l_1_0: 0,
                l_1_1: 0,
                l_1_2: 0,
                l_1_3: 0,
                l_1_4: 0,
                l_1_5: 0,
                l_2_0: 0,
                l_2_1: 0,
                l_2_2: 0,
                l_2_3: 0,
                l_2_4: 0,
                l_2_5: 0
            }
        ]);
    });

    it('should fade, should call the callback', function () {
        var called = false;

        animationInterface(new AnimationBackend({interval: 10}, mock))
            .fade().to(piglowInterface(['red'])).after('100ms').in('30ms')
            .fade().to(piglowInterface(['green'])).after('100ms').in('30ms')
            .repeat(1)
            .start(function () {
                called = true;
            });

        clock.tick(5000);

        expect(mock.values).to.deep.equal([
            {
                l_0_0: 85,
                l_0_1: 0,
                l_0_2: 0,
                l_0_3: 0,
                l_0_4: 0,
                l_0_5: 0,
                l_1_0: 85,
                l_1_1: 0,
                l_1_2: 0,
                l_1_3: 0,
                l_1_4: 0,
                l_1_5: 0,
                l_2_0: 85,
                l_2_1: 0,
                l_2_2: 0,
                l_2_3: 0,
                l_2_4: 0,
                l_2_5: 0
            },
            {
                l_0_0: 170,
                l_0_1: 0,
                l_0_2: 0,
                l_0_3: 0,
                l_0_4: 0,
                l_0_5: 0,
                l_1_0: 170,
                l_1_1: 0,
                l_1_2: 0,
                l_1_3: 0,
                l_1_4: 0,
                l_1_5: 0,
                l_2_0: 170,
                l_2_1: 0,
                l_2_2: 0,
                l_2_3: 0,
                l_2_4: 0,
                l_2_5: 0
            },
            {
                l_0_0: 255,
                l_0_1: 0,
                l_0_2: 0,
                l_0_3: 0,
                l_0_4: 0,
                l_0_5: 0,
                l_1_0: 255,
                l_1_1: 0,
                l_1_2: 0,
                l_1_3: 0,
                l_1_4: 0,
                l_1_5: 0,
                l_2_0: 255,
                l_2_1: 0,
                l_2_2: 0,
                l_2_3: 0,
                l_2_4: 0,
                l_2_5: 0
            },
            {
                l_0_0: 170,
                l_0_1: 0,
                l_0_2: 0,
                l_0_3: 85,
                l_0_4: 0,
                l_0_5: 0,
                l_1_0: 170,
                l_1_1: 0,
                l_1_2: 0,
                l_1_3: 85,
                l_1_4: 0,
                l_1_5: 0,
                l_2_0: 170,
                l_2_1: 0,
                l_2_2: 0,
                l_2_3: 85,
                l_2_4: 0,
                l_2_5: 0
            },
            {
                l_0_0: 84,
                l_0_1: 0,
                l_0_2: 0,
                l_0_3: 170,
                l_0_4: 0,
                l_0_5: 0,
                l_1_0: 84,
                l_1_1: 0,
                l_1_2: 0,
                l_1_3: 170,
                l_1_4: 0,
                l_1_5: 0,
                l_2_0: 84,
                l_2_1: 0,
                l_2_2: 0,
                l_2_3: 170,
                l_2_4: 0,
                l_2_5: 0
            },
            {
                l_0_0: 0,
                l_0_1: 0,
                l_0_2: 0,
                l_0_3: 255,
                l_0_4: 0,
                l_0_5: 0,
                l_1_0: 0,
                l_1_1: 0,
                l_1_2: 0,
                l_1_3: 255,
                l_1_4: 0,
                l_1_5: 0,
                l_2_0: 0,
                l_2_1: 0,
                l_2_2: 0,
                l_2_3: 255,
                l_2_4: 0,
                l_2_5: 0
            }
        ]);
    });

    it('should fade, should call the callback', function () {
        var called = false;

        animationInterface(new AnimationBackend({interval: 10}, mock))
            .fade().to(piglowInterface(['red'])).after('100ms').in('60ms')
            .fade().to(piglowInterface(['green'])).after('100ms').in('60ms')
            .fade().to(piglowInterface()).after('100ms').in('60ms')
            .repeat(1)
            .start(function () {
                called = true;
            });

        clock.tick(5000);

        expect(called).to.be.true;

        expect(mock.values).to.deep.equal([
            {
                l_0_0: 42,
                l_0_1: 0,
                l_0_2: 0,
                l_0_3: 0,
                l_0_4: 0,
                l_0_5: 0,
                l_1_0: 42,
                l_1_1: 0,
                l_1_2: 0,
                l_1_3: 0,
                l_1_4: 0,
                l_1_5: 0,
                l_2_0: 42,
                l_2_1: 0,
                l_2_2: 0,
                l_2_3: 0,
                l_2_4: 0,
                l_2_5: 0
            },
            {
                l_0_0: 85,
                l_0_1: 0,
                l_0_2: 0,
                l_0_3: 0,
                l_0_4: 0,
                l_0_5: 0,
                l_1_0: 85,
                l_1_1: 0,
                l_1_2: 0,
                l_1_3: 0,
                l_1_4: 0,
                l_1_5: 0,
                l_2_0: 85,
                l_2_1: 0,
                l_2_2: 0,
                l_2_3: 0,
                l_2_4: 0,
                l_2_5: 0
            },
            {
                l_0_0: 127,
                l_0_1: 0,
                l_0_2: 0,
                l_0_3: 0,
                l_0_4: 0,
                l_0_5: 0,
                l_1_0: 127,
                l_1_1: 0,
                l_1_2: 0,
                l_1_3: 0,
                l_1_4: 0,
                l_1_5: 0,
                l_2_0: 127,
                l_2_1: 0,
                l_2_2: 0,
                l_2_3: 0,
                l_2_4: 0,
                l_2_5: 0
            },
            {
                l_0_0: 170,
                l_0_1: 0,
                l_0_2: 0,
                l_0_3: 0,
                l_0_4: 0,
                l_0_5: 0,
                l_1_0: 170,
                l_1_1: 0,
                l_1_2: 0,
                l_1_3: 0,
                l_1_4: 0,
                l_1_5: 0,
                l_2_0: 170,
                l_2_1: 0,
                l_2_2: 0,
                l_2_3: 0,
                l_2_4: 0,
                l_2_5: 0
            },
            {
                l_0_0: 212,
                l_0_1: 0,
                l_0_2: 0,
                l_0_3: 0,
                l_0_4: 0,
                l_0_5: 0,
                l_1_0: 212,
                l_1_1: 0,
                l_1_2: 0,
                l_1_3: 0,
                l_1_4: 0,
                l_1_5: 0,
                l_2_0: 212,
                l_2_1: 0,
                l_2_2: 0,
                l_2_3: 0,
                l_2_4: 0,
                l_2_5: 0
            },
            {
                l_0_0: 255,
                l_0_1: 0,
                l_0_2: 0,
                l_0_3: 0,
                l_0_4: 0,
                l_0_5: 0,
                l_1_0: 255,
                l_1_1: 0,
                l_1_2: 0,
                l_1_3: 0,
                l_1_4: 0,
                l_1_5: 0,
                l_2_0: 255,
                l_2_1: 0,
                l_2_2: 0,
                l_2_3: 0,
                l_2_4: 0,
                l_2_5: 0
            },
            {
                l_0_0: 212,
                l_0_1: 0,
                l_0_2: 0,
                l_0_3: 42,
                l_0_4: 0,
                l_0_5: 0,
                l_1_0: 212,
                l_1_1: 0,
                l_1_2: 0,
                l_1_3: 42,
                l_1_4: 0,
                l_1_5: 0,
                l_2_0: 212,
                l_2_1: 0,
                l_2_2: 0,
                l_2_3: 42,
                l_2_4: 0,
                l_2_5: 0
            },
            {
                l_0_0: 170,
                l_0_1: 0,
                l_0_2: 0,
                l_0_3: 85,
                l_0_4: 0,
                l_0_5: 0,
                l_1_0: 170,
                l_1_1: 0,
                l_1_2: 0,
                l_1_3: 85,
                l_1_4: 0,
                l_1_5: 0,
                l_2_0: 170,
                l_2_1: 0,
                l_2_2: 0,
                l_2_3: 85,
                l_2_4: 0,
                l_2_5: 0
            },
            {
                l_0_0: 127,
                l_0_1: 0,
                l_0_2: 0,
                l_0_3: 127,
                l_0_4: 0,
                l_0_5: 0,
                l_1_0: 127,
                l_1_1: 0,
                l_1_2: 0,
                l_1_3: 127,
                l_1_4: 0,
                l_1_5: 0,
                l_2_0: 127,
                l_2_1: 0,
                l_2_2: 0,
                l_2_3: 127,
                l_2_4: 0,
                l_2_5: 0
            },
            {
                l_0_0: 84,
                l_0_1: 0,
                l_0_2: 0,
                l_0_3: 170,
                l_0_4: 0,
                l_0_5: 0,
                l_1_0: 84,
                l_1_1: 0,
                l_1_2: 0,
                l_1_3: 170,
                l_1_4: 0,
                l_1_5: 0,
                l_2_0: 84,
                l_2_1: 0,
                l_2_2: 0,
                l_2_3: 170,
                l_2_4: 0,
                l_2_5: 0
            },
            {
                l_0_0: 42,
                l_0_1: 0,
                l_0_2: 0,
                l_0_3: 212,
                l_0_4: 0,
                l_0_5: 0,
                l_1_0: 42,
                l_1_1: 0,
                l_1_2: 0,
                l_1_3: 212,
                l_1_4: 0,
                l_1_5: 0,
                l_2_0: 42,
                l_2_1: 0,
                l_2_2: 0,
                l_2_3: 212,
                l_2_4: 0,
                l_2_5: 0
            },
            {
                l_0_0: 0,
                l_0_1: 0,
                l_0_2: 0,
                l_0_3: 255,
                l_0_4: 0,
                l_0_5: 0,
                l_1_0: 0,
                l_1_1: 0,
                l_1_2: 0,
                l_1_3: 255,
                l_1_4: 0,
                l_1_5: 0,
                l_2_0: 0,
                l_2_1: 0,
                l_2_2: 0,
                l_2_3: 255,
                l_2_4: 0,
                l_2_5: 0
            },
            {
                l_0_0: 0,
                l_0_1: 0,
                l_0_2: 0,
                l_0_3: 212,
                l_0_4: 0,
                l_0_5: 0,
                l_1_0: 0,
                l_1_1: 0,
                l_1_2: 0,
                l_1_3: 212,
                l_1_4: 0,
                l_1_5: 0,
                l_2_0: 0,
                l_2_1: 0,
                l_2_2: 0,
                l_2_3: 212,
                l_2_4: 0,
                l_2_5: 0
            },
            {
                l_0_0: 0,
                l_0_1: 0,
                l_0_2: 0,
                l_0_3: 170,
                l_0_4: 0,
                l_0_5: 0,
                l_1_0: 0,
                l_1_1: 0,
                l_1_2: 0,
                l_1_3: 170,
                l_1_4: 0,
                l_1_5: 0,
                l_2_0: 0,
                l_2_1: 0,
                l_2_2: 0,
                l_2_3: 170,
                l_2_4: 0,
                l_2_5: 0
            },
            {
                l_0_0: 0,
                l_0_1: 0,
                l_0_2: 0,
                l_0_3: 127,
                l_0_4: 0,
                l_0_5: 0,
                l_1_0: 0,
                l_1_1: 0,
                l_1_2: 0,
                l_1_3: 127,
                l_1_4: 0,
                l_1_5: 0,
                l_2_0: 0,
                l_2_1: 0,
                l_2_2: 0,
                l_2_3: 127,
                l_2_4: 0,
                l_2_5: 0
            },
            {
                l_0_0: 0,
                l_0_1: 0,
                l_0_2: 0,
                l_0_3: 84,
                l_0_4: 0,
                l_0_5: 0,
                l_1_0: 0,
                l_1_1: 0,
                l_1_2: 0,
                l_1_3: 84,
                l_1_4: 0,
                l_1_5: 0,
                l_2_0: 0,
                l_2_1: 0,
                l_2_2: 0,
                l_2_3: 84,
                l_2_4: 0,
                l_2_5: 0
            },
            {
                l_0_0: 0,
                l_0_1: 0,
                l_0_2: 0,
                l_0_3: 42,
                l_0_4: 0,
                l_0_5: 0,
                l_1_0: 0,
                l_1_1: 0,
                l_1_2: 0,
                l_1_3: 42,
                l_1_4: 0,
                l_1_5: 0,
                l_2_0: 0,
                l_2_1: 0,
                l_2_2: 0,
                l_2_3: 42,
                l_2_4: 0,
                l_2_5: 0
            },
            {
                l_0_0: 0,
                l_0_1: 0,
                l_0_2: 0,
                l_0_3: 0,
                l_0_4: 0,
                l_0_5: 0,
                l_1_0: 0,
                l_1_1: 0,
                l_1_2: 0,
                l_1_3: 0,
                l_1_4: 0,
                l_1_5: 0,
                l_2_0: 0,
                l_2_1: 0,
                l_2_2: 0,
                l_2_3: 0,
                l_2_4: 0,
                l_2_5: 0
            }
        ]);
    });
});