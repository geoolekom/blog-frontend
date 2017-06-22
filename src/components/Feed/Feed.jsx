import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { denormalize } from 'normalizr';

import { post } from "../../settings";
import ListPost from "./ListPost";

class Feed extends React.Component {
    render = () => {
        const feedSchema = [ post ];
        const postList = denormalize(this.props.ids, feedSchema, this.props.posts);
        const postArray = postList.map(post => <ListPost title={ post.title } content={ post.content } />);
        return <div>
            { postArray }
        </div>
    };

    componentDidMount = () => {
        this.props.getPosts();
    };
}

const mapStateToProps = state => ({
    posts: state.entities.posts,
    ids: state.display.feed.ids
});

import { getPosts } from '../../actions'
const mapDispatchToProps = dispatch => (
    bindActionCreators({ getPosts }, dispatch)
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Feed);
