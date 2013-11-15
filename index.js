/**
 * Module dependencies.
 */

var colors = require('colors');
var util = require('util');

/**
 * Expose `Log`.
 */

exports = module.exports = Log;

/**
 * Log
 * @param {String} name
 * @param {String} color optional; defaults to blue
 * @param {String} message
 */

function Log(name, message) {
  var color = (function() {
    switch (message) {
      case 'cyan'    : return 'cyan';
      case 'green'   : return 'green';
      case 'blue'    : return 'blue';
      case 'magenta' : return 'magenta';
      case 'red'     : return 'red';
      default        : return 'blue';
    }
  }());

  var args = 1;
  if (message === "blue") args += 1;
  if (color   !== "blue") args += 1;

  var width = 9;
  var len = Math.max(0, width - name.length);
  var pad = Array(len + 1).join(' ');
  var messages = Array.prototype.slice.call(arguments, args);

  messages.map(function(msg){
    return util.inspect(msg);
  });
  if ((messages != null ? messages.length : void 8) === 1) {
    messages = messages[0];
  }
  console.log(pad, name[color], messages);
  return [name[color], messages].join(' ');
};
