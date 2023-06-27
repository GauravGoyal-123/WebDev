"use strict";

var button_value = "Show Details";
var para_value = "My name is Gaurav Goyal";
var show_val = para_value;
var show = 0;

var toggle = function toggle() {
    if (!show) {
        button_value = "Hide Details";
        show = 1;
    } else {
        button_value = "Show Details";
        show = 0;
    }

    if (show) {
        show_val = para_value;
    } else {
        show_val = '';
    }
    render();
};

function render() {
    var jsx = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Visiblility Toggle"
        ),
        React.createElement(
            "button",
            { onClick: toggle },
            button_value
        ),
        show > 0 && React.createElement(
            "p",
            null,
            show_val
        )
    );

    ReactDOM.render(jsx, document.getElementById('app'));
}

render();
