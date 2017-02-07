module.exports.tests = {};

// module.exports.tests.functional_example = function(test, common) {
//  var factory = require('../index');

//   test('functional example', function(t) {

//     t.plan(2);

//     var assertStream = through.obj( function( chunk, enc, next ){
//       t.equal( chunk.test, 'test1', 'transform stream' );
//       next();
//     });

//     var client = {
//       bulk: function( batch, cb ){
//         setInterval( function(){
//           return cb( 'expected failure' );
//         }, 500 );
//       },
//       close: function(){
//         t.equal( true, true, 'client closed' );
//       }
//     };

//     var stream = factory({ client: client });
//     stream.pipe(assertStream);
//     stream.write({
//       _index: 'foo',
//       _type: 'foo',
//       _id: 'foo',
//       data: {}
//     });
//     stream.end();

//   });
// };

module.exports.all = function (tape, common) {

  function test(name, testFunction) {
    return tape('stream: ' + name, testFunction);
  }

  for( var testCase in module.exports.tests ){
    module.exports.tests[testCase](test, common);
  }
};
