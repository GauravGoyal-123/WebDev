console.log("running")

var jsx = (<div>
        <h1>Gaurav</h1>
        <p>This is my first para</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

var profile = (
    <div>
        <h1>Gaurav Goyal</h1>
        <p>Age : 20 yrs old.</p>
        <p>Location : Maur Mandi, Punjab (India).</p>
    </div>
);

ReactDOM.render(jsx, document.getElementById('app'));

ReactDOM.render(profile, document.getElementById('me'));