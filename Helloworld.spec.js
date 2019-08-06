const sayHello = require('./Helloworld').sayHello;


describe('App test!', function () {
    it('sayHello should return hello', function (done) {
      if (sayHello() === 'hello') {
        done();
      }
    });
  });


// if (sayHello) {
//   console.log('sayHello should return "hello"');
//   if (sayHello() === 'hello') {
//     console.log('Success');
//   } else {
//     console.log('Fail');
//   }
// }
