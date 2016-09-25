import React, { Component } from "react";
import { Layout, Header, HeaderRow, Textfield, Navigation, Drawer, Content} from 'react-mdl';
import BlogFooter from './blogFooter/BlogFooter.jsx';
import Post from './post/Post.jsx';

export default class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      posts: [ {
        id: 1,
        title: 'Blog 1',
        image: {
          src: './../../../assets/leadership_cover.jpg',
          caption: 'Some nice caption for blog 1'
        },
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br>' + 
        'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,<br>' +  
        'when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br>' + 
        'It has    survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br>' + 
        'It ws popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        comments: [
          {
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry',
            commenter: 'Daniel Lereya',
            position: 'Daddy at Tel Aviv',
            avatarSrc: './../../../assets/profile.jpg',
            id: 1
          },
          {
            text: 'Amazing!',
            commenter: 'Jonathan Lereya',
            position: 'Baby at Tel Aviv',
            avatarSrc: './../../../assets/profile.jpg',
            id: 2
          }]}
          //,
        //   {
        // id: 2,
        // title: 'Blog 2',
        // image: {
        //   src: './../../../assets/team_cover.jpg',
        //   caption: 'Some nice caption'
        // },
        // content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br>' + 
        // 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,<br>' +  
        // 'when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br>' + 
        // 'It has    survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br>' + 
        // 'It ws popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        // comments: [
        //   {
        //     comment: 'Great!',
        //     commenter: 'Daniel Lereya',
        //     id: 100023
        //   },
        //   {
        //     comment: 'Amazing!',
        //     commenter: 'Jonathan',
        //     id: 2141
        //   },
        //   {
        //     comment: 'Great!',
        //     commenter: 'Daniel Lereya',
        //     id: 3218761238 
        //   }
      ]


      
    };
  }

  

  componentDidMount() {
    // this.interval = setInterval(
    //   this.increment.bind(this),
    //   1000
    // )
  }

  increment() {
    // this.setState(({ counter }) => {
    //   return {counter: counter + 1};
    // });
  }

  componentWillUnmount() {
    
  }

  render() {
    const { counter } = this.state;
    const { posts } = this.state;
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
                      const { image } = post;
                      console.log("Post id : " + post.id);
                      return <Post key={post.id} 
                                  caption={image.caption} 
                                  imageSrc={image.src} 
                                  title={post.title}
                                  content={post.content}
                                  comments={post.comments}
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
