import React, { Component } from 'react';
// import { Image } from 'react-bootstrap';
import imageAndHeader from './imageAndHeader.scss';

export default class ImageAndText extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="image-and-text">
        
        <h1 className="title">
          {this.props.text}
        </h1>
        
      </div>
    );
  }
}

//<Image className="image" circle={true} src={this.props.imageSrc} responsive={true} />
