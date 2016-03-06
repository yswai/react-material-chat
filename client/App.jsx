import React from 'react';
import {render} from 'react-dom';
import Chat from './components/Chat.jsx';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: [
                'hi how are you',
                'hey i am fine'
            ]
        }
    }

    render() {
        var messages = this.state.messages;
        return (
            <div id="main">
                <p>Hello React!</p>
                <Chat messages={messages} />
            </div>
        );
    }
}

if (!document.getElementById('main')) {
    render( <App />, document.getElementById('app'));
}