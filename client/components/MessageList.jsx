import React from 'react';
import Message from './Message.jsx';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import List from 'material-ui/lib/lists/list';
import Firebase from 'firebase';
import _ from 'lodash';

class MessageList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: {}
        };
        this.firebaseRef = new Firebase('https://ysw-react-chat.firebaseio.com/messages');
        this.firebaseRef.on('child_added', (data) => {
            let newMsgKey = data.key();
            console.log(data.val());
            if (!this.state.messages[newMsgKey]) {
                this.state.messages[newMsgKey] = data.val();
                this.forceUpdate();
            }
        });
        this.firebaseRef.on('child_removed', (data) => {
            this.setState({
                messages: _.omit(this.state.messages, data.key())
            })
        });
    }

    render() {
        let messageList = _.chain(this.state.messages).keys().map((key) => {
            let message = this.state.messages[key];
            console.log(message);
            return (
                <Message key={key} message={message} />
            );
        }).value();
        console.log(messageList);
        return (
            <Card style={{
                flexGrow: 2,
                marginLeft: '0.5rem'
            }}>
                <CardHeader title="Message List" />
                <List>{messageList}</List>
            </Card>
        )
    }

}

export default MessageList;