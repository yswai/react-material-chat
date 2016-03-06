import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class Message extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <li key={this.props.idx}>{this.props.message}</li>
        );
    }

}

export default Message;