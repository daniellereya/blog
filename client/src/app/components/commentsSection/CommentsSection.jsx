import React, { Component } from 'react';
import commentsSection from './commentsSection.scss';
import { List, ListItem, ListItemContent} from 'react-mdl';

export default class CommentsSection extends Component {

  constructor(props) {
    super(props);
  }
  

  render() {
    
    const { comments } = this.props;
    return (
      <div className='comments-section'>
        <List>
        {
          comments.map(function(comment) {
            return <ListItem className='comment' key={comment.id} threeLine>
                     <ListItemContent avatar='person' subtitle={comment.text}>
                          <span className='commenter'>{comment.commenter}</span> <span className='position'>{comment.position}</span>    
                      </ListItemContent>
                     
                  </ListItem>
          })
        }
        

        </List>
           
    </div>
    );
  }
}

// {
//               comments.map(function(comment) {
//                 return <Comment key={comment.id} 
//                             position={comment.position} 
//                             avatarSrc={comment.avatarSrc} 
//                             commenter={comment.commenter}
//                             content={comment.text}
//                             />
//               }
//                   )}