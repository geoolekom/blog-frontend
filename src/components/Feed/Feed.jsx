import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { denormalize } from 'normalizr';

import { post } from '../../settings';
import ListPost from './ListPost';
import { Segment } from 'semantic-ui-react';
import AddPostForm from './AddPostForm';

const padded = {
    padding: '4px'
};

class Feed extends React.Component {
    render = () => {
        if (this.props.isLoading) {
            return <Segment loading />;
        }
        const feedSchema = [ post ];
        const postList = denormalize(this.props.ids, feedSchema, this.props.entities);
        const postArray = postList.map(
            post => <ListPost
                key={ post.get('id') }
                id={ post.get('id') }
                title={ post.get('title') }
                content={ post.get('content') }
            />
        );
        return <div style={ padded }>
            <AddPostForm/>
            { postArray }
        </div>;
    };

    componentDidMount = () => {
        this.props.getPosts();
    };
}

const mapStateToProps = state => ({
    entities: state.get('entities'),
    ids: state.getIn(['display', 'feed', 'ids']),
    isLoading: state.getIn(['display', 'feed', 'isLoading']),
});

import { getPosts } from '../../actions';
const mapDispatchToProps = dispatch => (
    bindActionCreators({ getPosts }, dispatch)
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Feed);
