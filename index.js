/**
 * Module dependencies.
 */

var colors = require('colors');
var util = require('util');
var xtend = require('xtend');

/**
 * Expose `Log`.
 */

exports = module.exports = Log;

/**
 * Log
 * @param {Object} options optional
 * @param {String} name
 * @param {String} color optional; defaults to blue
 */

function Log(options, name, message) {
  var opts = {
    style: 'blue',
    width: 9,
    padding: 1,
    args: 2
  }

  if (typeof options !== "object") {
    if (!message) {
      opts.args -= 1;
      message = name;
      name = options;
    } else {
      opts.style = name;
    }
    options = {};
  } else {
    opts = xtend(opts, options)
  }

  var messages = Array.prototype.slice.call(arguments, opts.args)

  var len = Math.max(0, opts.width - name.length);
  var pad = Array(len + opts.padding).join(' ');
  var tab = Array(len + opts.padding + name.length + 2).join(' ');

  console.log(pad, name[opts.style], messages.join('\n' + tab));
  return [name[opts.style], messages].join(' ');
};
