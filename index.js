/**
 * Module dependencies.
 */

var colors = require('colors');
var inspect = require('util').inspect;
var extend = require('xtend');

/**
 * Expose `Log`.
 */

exports = module.exports = Log;

var defaults = {
  style: 'blue',
  width: 9,
  padding: 1
};

/**
 * Log
 * @param {Object} options optional
 * @param {String} message ...
 */

function Log() {

  var args = Array.prototype.slice.call(arguments);
  if (!(this instanceof Log)) return print(args);

  this.options = type(args[0]) === 'object' ? args[0] : {};
  this.log = log.bind(this)
  this.print = print.bind(this)
  return this.log;
}

function log() {
  var args = Array.prototype.slice.call(arguments)
  return this.print(args);
}

function print(args) {

  var label = '';
  var buf = [];
  var opts = extend(defaults, this.options || {});

  var self = this;
  args.forEach(function(arg, i, ctx) {
    if (type(arg) === "object") return opts = extend(opts, arg);
    if (ctx.length === 1) return buf.push(arg);
    if (!label.length) return label = arg;
    if (type(arg) === "string") return buf.push(arg);
    if (type(arg) === "array") return buf = buf.concat(arg);
  })

  var len = Math.max(0, opts.width - label.length);
  var pad = Array(len + opts.padding).join(' ');
  var tab = Array(len + opts.padding +  label.length + 2).join(' ');

  console.log(pad, label[opts.style], buf.join('\n' + tab));

  // return an array so we can test against it
  return [label].concat(buf);
};

function type(obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
};

