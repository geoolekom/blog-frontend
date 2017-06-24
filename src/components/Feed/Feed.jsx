import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { denormalize } from 'normalizr';

import { post } from "../../settings";
import ListPost from "./ListPost";
import { Segment } from 'semantic-ui-react';

const padded = {
    padding: "4px"
};

class Feed extends React.Component {
    render = () => {
        if (this.props.isLoading) {
            return <Segment loading />;
        }
        const feedSchema = [ post ];
        const postList = denormalize(this.props.ids, feedSchema, this.props.entities);
        const postArray = postList.map(post => <ListPost key={ post.id } id={ post.id } title={ post.title } content={ post.content } />);
        return <div style={ padded }>
            { postArray }
        </div>;
    };

    componentDidMount = () => {
        this.props.getPosts();
    };
}

const mapStateToProps = state => ({
    entities: state.entities,
    ids: state.display.feed.ids,
    isLoading: state.display.feed.isLoading
});

import { getPosts } from '../../actions'
const mapDispatchToProps = dispatch => (
    bindActionCreators({ getPosts }, dispatch)
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Feed);
