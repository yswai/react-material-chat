import React from 'react';
import Message from './Message.jsx';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class MessageList extends React.Component {

    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        let messageList = this.props.messages.map( (m, idx) => {
            return (
                <Message idx={idx} message={m} />
            );
        });
        return (
            <div id="message-list">
                <ul>{messageList}</ul>
            </div>
        )
    }

}

export default MessageList;