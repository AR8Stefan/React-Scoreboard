const Header = () => {
    return (
        <header>
            <h1>Scoreboard</h1>
            <span className="stats">Players: 1</span>
        </header>
    );
}

const Player = () => {
    return (
        <div className="player">
            <span className="player-name">
                Stefan
            </span>

            <div className="counter">
                <button className="counter-action decrement"> - </button>
                <span className="counter-score">1</span>
                <button className="counter-action increment"> + </button>
            </div>
        </div>
    )
}

ReactDOM.render(
    <Player />,
    document.getElementById('root')
);

// <Header /> is a SELF CLOSING component. <Header></Header> can also be used for nesting other components inside.
//
// The space before '/>' is not required, but it is reccomended for neatness and readability.
//
//