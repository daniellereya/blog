import React, { Component } from "react";
import { Layout, Header, HeaderRow, Textfield, Navigation, Drawer, Content} from 'react-mdl';
import BlogFooter from './blogFooter/BlogFooter.jsx';

export default class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      counter: 0,
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

    return (
      <div>
        <Layout>
          <Header waterfall hideTop>
              <HeaderRow title="Daniel Lereya's Personal Blog">
                  <Textfield
                      value=""
                      onChange={() => {}}
                      label="Search"
                      expandable
                      expandableIcon="search"
                  />
              </HeaderRow>
              <HeaderRow>
                  <Navigation>
                      <a href="">HOME</a>
                      <a href="">BLOG</a>
                      <a href="">ABOUT</a>
                  </Navigation>
              </HeaderRow>
          </Header>
          <Drawer title="Daniel Lereya's Personal Blog">
              <Navigation>
                 <a href="">HOME</a>
                 <a href="">BLOG</a>
                 <a href="">ABOUT</a>
              </Navigation>
          </Drawer>
          <Content>
              <div className="page-content" />
              
          
          </Content>
          <BlogFooter/>
        </Layout>
        
      </div>
    );
  }
}
