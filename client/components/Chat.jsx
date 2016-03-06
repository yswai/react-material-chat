import React from 'react';

class Chat extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let messageList = this.props.messages.map( (m, idx) => {
            return (
                <li key={idx}>{m}</li>
            );
        });
        return (
            <div id="message-list">
                <ul>{messageList}</ul>
            </div>
        )
    }

}

export default Chat;