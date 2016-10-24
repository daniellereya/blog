import React, { Component } from 'react';
import Photo from './../photo/Photo.jsx';
import { CommentsSectionContainer } from './../commentsSection/commentsSection.jsx';
import post from './post.scss';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { props } = this ;
    return (
      <div className='post'>
        <div className='photo-container'>
          <Photo src={props.imageSrc} caption={props.caption}/>
        </div>
        <div className='content'>
          <div className='title'>
            {props.title}
          </div>
          <div className='body'>
            {props.content}
          </div>
        </div>
        <CommentsSectionContainer postId={props.postId} comments={props.comments}></CommentsSectionContainer>
      </div>
    );
  }
}
