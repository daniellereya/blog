import React, { Component } from 'react';
import header from './header.scss';
// import { Button } from 'react-bootstrap';
import ImageAndText from './../shared/imageAndText/imageAndText.js';

export default class Header extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="header">
        <ImageAndText text={this.props.title} />
      </div>
    );
  }
}

// imageSrc="/assets/profile.jpg"
