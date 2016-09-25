import React, { Component } from "react";
import blogFooter from './blogFooter.scss';
import { Footer, FooterSection, FooterDropDownSection, FooterLinkList } from 'react-mdl';



export default class BlogFooter extends Component {
  constructor(props) {
    super(props);
  }
   render() {

    return (
      <div className="blog-footer">
       <Footer className="footer" size="mini">
              <FooterSection  type="left" logo="Daniel Lereya's Blog (c)">
                  <FooterLinkList>
                      <a href="#">Home</a>
                      <a href="#">Blog</a>
                      <a href="#">About</a>
                  </FooterLinkList>
              </FooterSection>
          </Footer>
      </div>
    );
  }
}