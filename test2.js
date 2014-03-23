var piglow = require('./');

var animation = piglow.animation;
var pi = piglow.piGlowInterface;
var backend = new piglow.BackendMockPrettyPrint();

//TODO: depugger, split by newline, add prefix to every single line

animation({interval:10, debug: false}, backend)
    .set().to(pi(['ring_0'])).after('1s')
    .set().to(pi(['ring_1'])).after('1s')
    .set().to(pi(['ring_2'])).after('1s')
    .fade().to(pi(['leg_0'])).in('1s')
    .fade().to(pi(['leg_1'])).in('1s')
    .fade().to(pi(['leg_2'])).in('1s')

    .start(function() {
        console.log('i looped 3 times, now Im done.');
    });