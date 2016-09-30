import React, { Component } from 'react';
import commentsSection from './commentsSection.scss';
import { List, ListItem, ListItemContent, Textfield, Button} from 'react-mdl';

export default class CommentsSection extends Component {

  constructor(props) {
    super(props);
    this.state = { newComment: {
        name: "",
        comment: ""
      }
    };
    this.canComment = this.canComment.bind(this);
    this.handleCommenterNameChange = this.handleCommenterNameChange.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);
  }

  canComment() {
    const { newComment } = this.state;
    console.log(newComment);
    return newComment.name !== "" && newComment.comment !== "";
  }

  handleCommenterNameChange(e) {
    this.handleTextChange(e, "commenter");
  }

  handleCommentChange(e) {
    this.handleTextChange(e, "comment");
  }

  handleTextChange(e, type) {
    const newValue = e.target.value;
    const { newComment } = this.state;
    const commentChange = type === "comment";
    this.setState({
      newComment: {
        name: commentChange ? newComment.name : newValue,
        comment: commentChange ? newValue : newComment.comment,
      }
   });
  }

  render() {
    const comments = this.props.comments;
    const { newComment } = this.state;
    return (
      <div className='comments-section'>
        
        <List>
        {
          comments.map(function(comment) {
            return <ListItem className='comment' key={comment.get("id")} threeLine>
                     <ListItemContent avatar='personc' subtitle={comment.get("text")}>
                          <span className='commenter'>{comment.get("commenter")}</span> <span className='position'>{comment.get("position")}</span>    
                      </ListItemContent>
                   </ListItem>
          })
        }
        </List>
        <div className='comment-box'>
            <Textfield
                className='commenter-textfield'
                onChange={() => {}}
                label="Name"
                floatingLabel
                value={newComment.name}
                onChange={this.handleCommenterNameChange}
                
            />
            <Textfield 
                className='comment-textfield'
                onChange={() => {}}
                label="Your thoughs..."
                floatingLabel
                rows={2}
                value={newComment.comment}
                onChange={this.handleCommentChange}
            />
                
            <Button raised colored ripple 
                className='comment-btn'
                disabled={!this.canComment()}
                >Comment</Button>
        </div>
    </div>
    );
  }
}