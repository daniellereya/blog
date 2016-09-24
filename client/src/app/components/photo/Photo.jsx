import React, { Component } from 'react';
import photo from './photo.scss';


export default class Photo extends Component {
    constructor(props) {
        super(props);
    }
    
  render(){
    return (
      <div className='photo'>
        <img  className='image' src={this.props.src} />
        <span className='caption'>{this.props.caption}</span>
      </div>
    );
  }
}

  
