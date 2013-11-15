
var lig = require('./index');

describe('lig', function() {
  it('should display console messages', function() {

    lig('default', 'this is the default blue')
      .should.include('this is the default blue');

    lig('default', 'blue', 'this is still the default blue')
      .should.include('this is still the default blue');

    lig('strong', 'red', 'while this is red')
      .should.include('while this is red');

    lig('woah').should.include('woah');
  });
});
