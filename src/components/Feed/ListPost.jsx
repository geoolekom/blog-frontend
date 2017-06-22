import React from 'react';
import PropTypes from 'prop-types';

import { Segment } from 'semantic-ui-react';


class ListPost extends React.Component {
    render = () => <Segment>
        <h1>{ this.props.title }</h1>
        { this.props.content }
    </Segment>
}

ListPost.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
};

export default ListPost;