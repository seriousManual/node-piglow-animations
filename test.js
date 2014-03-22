var piglow = require('piglow');

var animation = require('./');
var pi = piglow.piGlowInterface;
var backend = new piglow.BackendMockPrettyPrint();

//TODO: depugger, split by newline, add prefix to every single line

animation({interval:10, debug: false}, backend)
    .set().to(pi(['ring_0'])).after('1s')
    .set().to(pi(['ring_1'])).after('1s')
    .set().to(pi(['ring_2'])).after('1s')
    .set().to(pi(['ring_3'])).after('1s')
    .set().to(pi(['ring_4'])).after('1s')
    .set().to(pi(['ring_5'])).after('1s')
    .start(function() {
        console.log('i looped 3 times, now Im done.');
    });