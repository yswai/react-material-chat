import React from 'react';
import Card from 'material-ui/lib/card/card';

class Message extends React.Component {

    constructor(props) {
        super(props);
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

    render() {
        let messageboxStyle = this.messageboxStyle;
        return (
            <Card style={{
                maxWidth: '1200px',
                margin: '1rem auto',
                padding: 30
            }}>
                <input type='textarea' style={messageboxStyle} />
            </Card>
        );
    }
}

export default Message;