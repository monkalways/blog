import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Button, Container, Header, Item } from 'semantic-ui-react';

import { fetchPosts } from '../actions';

class PostIndex extends React.Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.map(this.props.posts, post => (
            <Item key={post.id}>
                <Item.Content>
                    <Item.Header as='a' onClick={() => this.props.push(`/posts/${post.id}`)}>{post.title}</Item.Header>
                    <Item.Meta>{post.categories}</Item.Meta>
                    <Item.Description>
                        {post.content}
                    </Item.Description>
                </Item.Content>
            </Item>
        ));
    }

    render() {
        return (
            <Container>
                <Header>Posts</Header>
                <Item.Group divided>
                    { this.renderPosts() }
                </Item.Group>
                <Button primary onClick={() => this.props.push('/posts/new')}>New Post</Button>
            </Container>
        );
    }
}

const mapStateToProps = ({ posts }) => ({
    posts
});

export default connect(mapStateToProps, { fetchPosts, push })(PostIndex);