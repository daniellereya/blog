import React, { Component } from "react";
import { connect } from 'react-redux';
import { Layout, Header, HeaderRow, Textfield, Navigation, Content} from 'react-mdl';
import BlogFooter from './blogFooter/BlogFooter.jsx';
import Post from './post/Post.jsx';

export class MainLayout extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  increment() {
  }

  componentWillUnmount() {
    
  }

  render() {
    const { posts } = this.props;
    return (
      <div>
        <Layout fixedHeader>
          <Header >
              <HeaderRow title="Daniel Lereya's Personal Blog">
                  <Navigation>
                      <a href="">HOME</a>
                      <a href="">BLOG</a>
                      <a href="">ABOUT</a>
                  </Navigation>
              </HeaderRow>
          </Header>
          <Content>
              <div className="page-content">
                  {
                    posts.map(function(post) {
                      const image = post.get("image");
                      return <Post key={post.get("id")} 
                                  postId={post.get("id")}
                                  caption={image.get("caption")} 
                                  imageSrc={image.get("src")} 
                                  title={post.get("title")}
                                  content={post.get("content")}
                                  comments={post.get("comments")}
                                  />
                    }
                  )}
              </div>
          </Content>
          <BlogFooter/>
        </Layout>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.get('posts')
  };
}

export const MainLayoutContainer = connect(mapStateToProps)(MainLayout);
