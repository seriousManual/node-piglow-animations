var piglow = require('../');

var animation = piglow.animation;
var pi = piglow.piGlowInterface;

animation()
    .set().to(pi(['red'])).after('0.4s')
    .set().to(pi(['blue'])).after('0.4s')
    .start();
