import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Container, Header } from 'semantic-ui-react';
import { push } from 'react-router-redux';

import { fetchSinglePost, deleteSinglePost } from '../actions';

class PostDetail extends Component {
    
    componentDidMount() {
        const postId = this.props.match.params.id;
        this.props.fetchSinglePost(postId);
    }

    render() {
        const { post } = this.props;
        if(!post) {
            return (
                <div>Loading...</div>
            )
        }
        return (
            <Container>
                <Header>{post.title}</Header>
                <Header as='h6'>Categories: {post.categories}</Header>
                <p>{post.content}</p>
                <Button onClick={() => this.props.deleteSinglePost(post.id)} primary>Delete</Button>
                <Button onClick={() => this.props.push('/')}>Go Back</Button>
            </Container>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    post: state.posts[ownProps.match.params.id]
});

export default connect(mapStateToProps, { fetchSinglePost, deleteSinglePost, push })(PostDetail);