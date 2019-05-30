// const title = <h1>My First React Element</h1>;
// const desc = <p>I just learned how to create a React node and render it into the DOM.</p>;

const name = 'Stefan';
const desc = 'I just learned you can use curly braces too!';
const myTitleID = 'main-title';

// JSX Expressions are always surrounded by curly braces
const header = (
    <header>
        <h1 id={myTitleID}>{name}'s First React Element!</h1> 
        <p className="main-desc">{desc}</p>
        {/* This is a comment */}
    </header>
);
// 'class' is a reserved word for JavaScript, use className instead. className is compiled/translated using babel.

ReactDOM.render(
    header,
    document.getElementById('root')
);