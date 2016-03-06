import React from 'react';
import Message from './Message.jsx';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import List from 'material-ui/lib/lists/list';
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