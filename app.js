const players = [
    {
        name: "Stefan",
        score: 50,
        id: 1
    },
    {
        name: "Jess",
        score: 85,
        id: 2
    },
    {
        name: "Indie",
        score: 95,
        id: 3
    }
]

const Header = (props) => {
    return (
        <header>
            <h1> { props.title } </h1>
            <span className="stats">Players: { props.totalPlayers }</span>
        </header>
    );
}

const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
                { props.name }
            </span>

            <Counter score={props.score}/>
        </div>
    );
}

class Counter extends React.Component {
    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement"> - </button>
                <span className="counter-score">{ this.props.score }</span>
                <button className="counter-action increment"> + </button>
            </div>
        );
    }

}

const App = (props) => {
    return (
        <div className="scoreboard">
            <Header 
                title="My Scoreboard"
                totalPlayers={props.initialPlayers.length}
                />

            {/* Player List */}
            {props.initialPlayers.map( player =>
                <Player 
                    name={player.name}
                    score={player.score}
                    key={player.id.toString()}
                />
            )}
        </div>
    );
}

ReactDOM.render(
    <App initialPlayers={players} />,
    document.getElementById('root')
);

// <Header /> is a SELF CLOSING component. <Header></Header> can also be used for nesting other components inside.
//
// The space before '/>' is not required, but it is reccomended for neatness and readability.
//
//