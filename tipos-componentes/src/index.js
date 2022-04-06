import React from 'react';
import ReactDOM from 'react-dom';

import HemisphereDisplay from './components/Hemisphere';

class App extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = { latitud: null, errorMessage: '' }
    }

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState( { latitud: position.coords.latitude } );
            },
            (error) => {
                this.setState( { errorMessage: error.message } )
            }
        );
    }
    
    render() {
        
        if (this.state.errorMessage && !this.state.latitud) {
            return <div> { this.state.errorMessage } </div>
        } 

        if (!this.state.errorMessage && this.state.latitud) {
            
            return <div> <HemisphereDisplay latitud={ this.state.latitud }/> </div>
        } 
        
        else {
            return <div> Cargando... </div>
        }
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)