import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Button, Container, Form, Header, Input, Message, TextArea } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';

import { saveNewPost } from '../actions';

const cancelButtonStyle = {
    marginLeft: 10
};

const renderTextArea = ({ input, label, type, meta: { touched, error } }) => (
    <Form.Field>
        <label>{label}</label>
        <TextArea
            {...input}
        />
        <Message
            negative
            hidden={!(touched && error)}
            content={error}
        />
    </Form.Field>
);

const renderInput = ({ input, label, type, meta: { touched, error } }) => (
    <Form.Field>
        <label>{label}</label>
        <Input {...input} />
        <Message
            negative
            hidden={!(touched && error)}
            content={error}
        />
    </Form.Field>
);

const PostNew = ({ handleSubmit, push, saveNewPost }) => {

    const onSubmit = (values) => {
        saveNewPost(values);
    };

    return (
        <Container>
            <Header>New Post</Header>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Field name='title' component={renderInput} label="Title" placeholder='Title' />
                <Field name='categories' component={renderInput} label="Categories" placeholder='Categories' />
                <Field name='content' component={renderTextArea} label="Content" placeholder='Content' />
                <Button type='submit' primary>Submit</Button>
                <Button onClick={ () => push('/') } style={cancelButtonStyle}>Cancel</Button>
            </Form>
        </Container>
    );
};

const validate = (values) => {
    const errors = {};

    if(!values.title) {
        errors.title = 'Enter a title';
    }
    if(!values.categories) {
        errors.categories = 'Enter some categories';
    }
    if(!values.content) {
        errors.content = 'Enter some content';
    }

    return errors;
};

const PostNewRedux = connect(null, { push, saveNewPost })(PostNew);

export default reduxForm({
    validate,
    form: 'newPost'
})(PostNewRedux);