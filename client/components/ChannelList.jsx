import React from 'react';
import ListItem from 'material-ui/lib/lists/list-item';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import List from 'material-ui/lib/lists/list';
import Avatar from 'material-ui/lib/avatar';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class ChannelList extends React.Component {

    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        let items = this.props.channels.map( (c, idx) => {
            return (
                <ListItem key={idx} primaryText={c} />
            )
        });
        return (
            <Card>
                <CardHeader title="ChannelList" />
                <List>{items}</List>
            </Card>
        )
    }

}

export default ChannelList;