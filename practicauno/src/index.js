import React from 'react';
import ReactDOM from 'react-dom';


const App = () => {

    const btnStyle = {backgroundColor: 'red', color: 'white'};
    const btnText = 'Click me!';
    var message = '';

    function btnAction() {
        return 'Hi';
    };

    return ( 
        <div>
            <label htmlFor="name" className="label">Enter Email:</label>
            <input type="email" name="emailinp" id="name" />
            <button style={btnStyle} >{btnText}</button>
            <br />
            <label htmlFor="data">{btnAction()}</label>
        </div>
    )
}
        
ReactDOM.render( 
    <App />,
    document.querySelector('#root')
)