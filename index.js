var piglow = require('piglow');

var AnimationBackend = require('./lib/AnimationBackend');
var animationInterface = require('./lib/interface');

/**
 * factory method for a animation
 * @param options {Object} values: interval (refresh interval in ms, default: 100, debug: activate debugging, default: false)
 * @param piglowBackend the place to inject a mocking backend, default is a standard piglow hardware backend
 * @return animationInterface
 */
function createAnimation(options, piglowBackend) {
    options = options || {};

    if(!piglowBackend) {
        piglowBackend = new (require('piglow')).Backend();
    }

    return animationInterface(new AnimationBackend(options, piglowBackend));
}

piglow.animation = createAnimation;

module.exports = piglow;