import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Segment, Header } from 'semantic-ui-react';

class ListPost extends React.Component {
    render = () => <Segment>
        <Header>
            <Link to={`${this.props.id}`}>{ this.props.title }</Link>
        </Header>
        { this.props.content }
    </Segment>
}

ListPost.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
};

export default ListPost;