let button_value = "Show Details";
let para_value = "My name is Gaurav Goyal";
let show_val = para_value;
let show = 0;

const toggle = () => {
    if(!show) {
        button_value = "Hide Details";
        show = 1;
    }
    else {
        button_value = "Show Details";
        show = 0;
    }
    
    if(show) {
        show_val = para_value;
    }
    else {
        show_val = '';
    }
    render();
}

function render() {
    const jsx = (
        <div>
            <h1>Visiblility Toggle</h1>
            <button onClick = {toggle}>{button_value}</button>
            {show  > 0 && <p>{show_val}</p>}
        </div>
    )
    
    ReactDOM.render(jsx, document.getElementById('app'));
}

render();