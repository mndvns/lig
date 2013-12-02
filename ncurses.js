var j = require('ncurses');

var win = new j.Window();

win.centertext(1, 'asdfasd')
win.print(' asdfasd');
win.on('inputChar', function(data) {
  win.print(data)
})
win.refresh()
/* j.redraw(); */

