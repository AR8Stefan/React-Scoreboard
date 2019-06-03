function Header = () => (
    <header>
        <h1>Scoreboard</h1>
        <span className="stats">Players: 1</span>
    </header>
);
// Arrow functions are used for a more consise way of reading/writing code.
// React comonents are required to begin with a capital letter.

ReactDOM.render(
    <Header />, 
    document.getElementById('root')
);

// <Header /> is a SELF CLOSING component. <Header></Header> can also be used for nesting other components inside.
//
// The space before '/>' is not required, but it is reccomended for neatness and readability.
//
//