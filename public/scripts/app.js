'use strict';

console.log("running");

var jsx = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Gaurav'
    ),
    React.createElement(
        'p',
        null,
        'This is my first para'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

var profile = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Gaurav Goyal'
    ),
    React.createElement(
        'p',
        null,
        'Age : 20 yrs old.'
    ),
    React.createElement(
        'p',
        null,
        'Location : Maur Mandi, Punjab (India).'
    )
);

ReactDOM.render(jsx, document.getElementById('app'));

ReactDOM.render(profile, document.getElementById('me'));
