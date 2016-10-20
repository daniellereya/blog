import React, { Component } from 'react';
import commentsSection from './commentsSection.scss';
import { List, ListItem, ListItemContent, Textfield, Button} from 'react-mdl';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import * as actionCreators from '../../actionCreators';


export class CommentsSection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newComment: {
        commenter: "",
        text: ""
      }
    };
    // this.canComment = this.canComment.bind(this);
    this.handleCommenterNameChange = this.handleCommenterNameChange.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);
  }

  initCommentBox() {
    this.setState({
      newComment: {
        commenter: "",
        text: ""
      }
    });
  }

  canComment() {
    const { newComment } = this.state;
    return newComment.commenter !== "" && newComment.text !== "";
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
        commenter: commentChange ? newComment.commenter : newValue,
        text: commentChange ? newValue : newComment.text,
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
            comments.map(function (comment) {
              return <ListItem className='comment' key={comment.get("id") } threeLine>
                <ListItemContent avatar='personc' subtitle={comment.get("text") }>
                  <span className='commenter'>{comment.get("commenter") }</span> <span className='position'>{comment.get("position") }</span>
                </ListItemContent>
              </ListItem>
            })
          }
        </List>
        <div className='comment-box'>
          <Textfield
            className='commenter-textfield'
            onChange={() => { } }
            label="Name"
            floatingLabel
            value={newComment.commenter}
            onChange={this.handleCommenterNameChange}

            />
          <Textfield
            className='comment-textfield'
            onChange={() => { } }
            label="Your thoughs..."
            floatingLabel
            rows={2}
            value={newComment.text}
            onChange={this.handleCommentChange}
            />

          <Button raised colored ripple
            className='comment-btn'
            disabled={!this.canComment() }
            onClick={() => {
              const lastCommentId = comments.get(comments.size -1).get("id");
              newComment.id = lastCommentId + 1;
              this.props.comment(newComment, this.props.postId)
              this.initCommentBox();
            }}
            >Comment</Button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    someCustomProp: 1
  };
}

export const CommentsSectionContainer = connect(
  mapStateToProps,
  actionCreators
)(CommentsSection);