import React from 'react';
import {render} from 'react-dom';
import MessageList from './components/MessageList.jsx';
import ChannelList from './components/ChannelList.jsx';
import mui from 'material-ui';
import MyTheme from './components/MyTheme.jsx';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
require('./styles/main.scss');

let Colors = mui.Styles.Colors;
const AppBar = mui.AppBar;

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: [
                'hi how are you',
                'hey i am fine'
            ],
            channels: [
                'Channel A',
                'Channel B'
            ]
        }
    }
    getChildContext() {
        return {
            muiTheme: ThemeManager.getMuiTheme(MyTheme)
        };
    }

    render() {
        let messages = this.state.messages;
        let channels = this.state.channels;
        return (
            <div id="main">
                <AppBar title="Awesome Chat App" />
                <ChannelList channels={channels} />
                <MessageList messages={messages} />
            </div>
        );
    }
}

App.childContextTypes = {
    muiTheme: React.PropTypes.object
};

if (!document.getElementById('main')) {
    render( <App />, document.getElementById('app'));
}