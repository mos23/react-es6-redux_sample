import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
    render(){
        return <p>hello react!</p>;
    }
    
}

render(<App />,document.getElementById('app'));