import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react';


class AddPostForm extends React.Component {

    state = {
        title: '',
        content: ''
    };

    handleChange = e => { this.setState({[e.target.name]: e.target.value}) };

    onSubmit = e => {
        e.preventDefault();
        this.props.addPost(this.state.title, this.state.content);
    };

    render = () => <Form onSubmit={ this.onSubmit } size="small">
        <Form.Input label="Заголовок" type="text" name="title" onChange={ this.handleChange } />
        <Form.TextArea label="Текст" type="text" name="content" onChange={ this.handleChange } />
        <Form.Button>Добавить пост</Form.Button>
    </Form>;
}

const mapStateToProps = state => ({});

import { addPost } from '../../actions';
const mapDispatchToProps = dispatch => (
    bindActionCreators({ addPost }, dispatch)
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddPostForm);
