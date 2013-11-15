
var lig = require('./index');

describe('lig', function() {
  it('should display console messages', function() {

    console.log();

    lig('default', 'this is the default blue')
      .should.include('this is the default blue');

    lig('strong', 'red', 'while this is red')
      .should.include('while this is red');

    lig('yup', [1, 2, 3]).should.include('yup');

    lig('green', 'green', 'everything lines up nicely on the left label')
      .should.include('green');

    lig('bold', 'bold', 'more than just colors')
      .should.include('bold');

    lig('hiyooooo', 'inverse', 'anything in the `colors` library is fair game')
      .should.include('colors')

  });
});
