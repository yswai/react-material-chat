import React from 'react';
import ListItem from 'material-ui/lib/lists/list-item';
import Avatar from 'material-ui/lib/avatar';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class Message extends React.Component {

    constructor(props) {
        super(props);
        console.log(JSON.stringify(props));
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        let message = `${this.props.message.author}:  ${this.props.message.message}`;
        return (
            <ListItem leftAvatar={<Avatar src="https://avatars1.githubusercontent.com/u/10697379?v=3&s=140" />}
                    key={this.props.key} primaryText={message}>
            </ListItem>
        );
    }

}

export default Message;