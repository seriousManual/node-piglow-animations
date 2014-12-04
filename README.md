# piglow-animations [![Build Status](https://travis-ci.org/zaphod1984/node-piglow-animations.png)](https://travis-ci.org/zaphod1984/node-piglow-animations)

[![NPM](https://nodei.co/npm/piglow-animations.png)](https://nodei.co/npm/piglow-animations/)

[![NPM](https://nodei.co/npm-dl/piglow-animations.png?months=3)](https://nodei.co/npm/piglow-animations/)

node-piglow-animations is a library on top of node-piglow that allows for piglow animations.

An animation consists of a bunch of interface configurations that will be subsequently invoked.
Between the different configurations transitions can be defined as well als transformation and invocation times.
A chaining interface makes the configuration of animations super simple.

<p align="center">
    <img src="https://raw.githubusercontent.com/zaphod1984/node-piglow-animations/master/pics/animation.gif" />
</p>

Check the examples folder for animation examples.

### Usage
````javascript
var piglow = require('piglow-animations');

var animation = piglow.animation;
var pi = piglow.piGlowInterface;

animation({interval:10, debug: true})
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
````

### Api

#### Constructor([options, [backend]])
Creates a new animation object.

Optional options object:
  * interval: defines in which interval LED updates should be made, default: 100
  * debug: activates debugging

The optional backend object can be used to inject a mocking backend (unit tests, non raspi environment etc). See the [Adressing section](https://github.com/zaphod1984/node-piglow#mocking) of [node-piglow](https://github.com/zaphod1984/node-piglow) for details.

#### fade()
Opens up a new `fade` transition context.

#### set()
Opens up a new `set` transition context.

#### to(piGlowInterface)
This directive relates to a certain context, openend by `set` or `fade`.
It defines to which LED configuration a transition should morph.

#### repeat(timeRange)
Defines how often or how long a animation should be run.
Possible parameters:
````javacript
    animation().repeat(1);          //runs exactly once
    animation().repeat('1time');    //runs exactly once
    animation().repeat('2times');   //runs exactly two times
    animation().repeat('10s');      //runs for 10seconds (animation loops will always be completed)
    animation().repeat('0.1s');     //runs for 100ms (animation loops will always be completed)
    animation().repeat('100ms');    //runs for 100ms (animation loops will always be completed)
````

If no repeat directive has been set the animation will run forever.

#### after(timeRange)
This directive relates to a certain context, opened by `set` or `fade`.
Defines how much time should pass until the transition gets started.
Check [Repeat](#repeat) for possible values.

#### in(timeRange)
This directive relates to a certain context, opened `fade`.
Defines how much time the fade transition should run.
Check [Repeat](#repeat) for possible values.

#### start([callback])
Starts the animation.
Accepts an optional callback that will be called when the animation has been finished.

#### stop([noCallback])
Stops the animation, if present the callback from the start command will be fired.
If the parameter `noCallback` has been set, the callback will not be invoked.

### Variations of interface configurations
For your convenience there are some additional ways of predefining LED values:

````javascript
var pi = require('piglow').piGlowInterface;

//create and set
var a = pi();
a.ring_0 = 100;

//initialize with predefined values
var b = pi({'ring_0': 100, 'l_1_1': 10});

//initialize with maximum brightness
var c = pi(['ring_5']);
````
