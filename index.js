var Route = require('./router');

function route() {
    var url = location.hash;
    console.log(location);
    location.hash = 'module3/fuck';
    Route.init({
        'module1': function () {
            console.log(1);
        },
        'module2/:name/:age': function () {
            console.log(2, arguments);
        },
        'module3(/:name)(/:age)': function () {
            console.log('3', arguments);
        },
        '*': function () {
            console.log(404);
        }
    });
}
