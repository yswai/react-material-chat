import React from 'react';
import Card from 'material-ui/lib/card/card';
import Firebase from 'firebase';
import _ from 'lodash';

class Message extends React.Component {

    constructor(props) {
        super(props);
        this.firebaseRef = new Firebase('https://ysw-react-chat.firebaseio.com/messages');
        this.state = {
            messages: ''
        };
        this.messageboxStyle = {
            borderRadius: '3px',
            outline: 'auto 0px',
            width: '100%',
            resize: 'none',
            borderColor: '#D0D0D0',
            minHeight: 50,
            color: '#555',
            fontSize: 14
        }
    }

    onKeyUp(evt) {
        evt.preventDefault();
        if (evt.keyCode === 13 && !_.isEmpty(evt.target.value.trim())) {
            this.firebaseRef.push({
                author: 'YSW',
                message: evt.target.value.trim()
            });
            evt.target.value = '';
        }
    }

    render() {
        let messageboxStyle = this.messageboxStyle;
        let onKeyUp = this.onKeyUp.bind(this);
        return (
            <Card style={{
                maxWidth: '1200px',
                margin: '1rem auto',
                padding: 30
            }}>
                <input onKeyUp={onKeyUp} type='textarea' style={messageboxStyle} />
            </Card>
        );
    }
}

export default Message;