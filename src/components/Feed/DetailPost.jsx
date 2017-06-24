import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { denormalize } from 'normalizr';

import { Segment } from "semantic-ui-react";
import { post } from "../../settings";

class DetailPost extends React.Component {
    render = () => {
        if (this.props.isLoading) {
            return <Segment loading />;
        }
        this.id = this.props.match.params.id;
        const postDetail = denormalize(this.id, post, this.props.entities);
        return <Segment>
            { postDetail ? postDetail.get('title') : null }
        </Segment>;
    };

    componentDidMount = () => {
        this.props.getPost(this.id);
    };
}

const mapStateToProps = state => ({
    entities: state.get('entities'),
    isLoading: state.getIn(['display', 'post', 'isLoading'])
});

import { getPost } from '../../actions';
const mapDispatchToProps = dispatch => (
    bindActionCreators({ getPost }, dispatch)
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailPost);
