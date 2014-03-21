var piglow = require('piglow');

var animation = require('./');
var pi = piglow.piGlowInterface;
var backend = new piglow.BackendMock();

//TODO: depugger, split by newline, add prefix to every single line

animation({interval:10, debug: true}, backend)
    .set().to(pi(['ring_0'])).after('0.1s')
    .set().to(pi(['ring_1'])).after('0.1s')
    .set().to(pi(['ring_2'])).after('0.1s')
    .fade().to(pi['leg_0']).after('1s').in('1s')
    .fade().to(pi['leg_1']).after('1s').in('1s')
    .fade().to(pi['leg_2']).after('1s').in('1s')
    .repeat(3)
    .start(function() {
        console.log('i looped 3 times, now Im done.');
    });