import React, { Component } from 'react';
import Photo from './../photo/Photo.jsx';
import post from './post.scss';
export default class Header extends Component {

  constructor(props) {
    super(props);
  }
  // key={post.id} 
  //                                 caption={image.caption} 
  //                                 imageSrc={image.src} 
  //                                 title={post.title}
  //                                 content={post.content}
  //                                 comments={post.comments}
  render() {
    const { props } = this ;
    return (
      <div className='post'>
        <div className='photo-container'>
          <Photo src={props.imageSrc} caption={props.caption}/>
        </div>
        <div className='title'>
          {props.title}
        </div>
        <div className='content'>
          {props.content}
        </div>
        
        
      </div>
    );
  }
}

// imageSrc="/assets/profile.jpg"
