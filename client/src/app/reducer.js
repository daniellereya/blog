import { Map } from 'immutable';

function setState(state, newState) {
    return state.merge(newState);
}

function comment(state, comment, postId) {
    const commentAsMap = Map(comment);
    const newState = state.updateIn(['posts'], posts => posts.update(
        posts.findIndex(function (post) {
              return post.get("id") === postId;
        }), function (post) {
            return post.update('comments', comments => {
                return comments.insert(comments.size, commentAsMap);
            });
        }
    ));
    return newState;
}

function fetchPosts(state, postId) {
    if(postId === null) {
        // fetching all posts

    } else {
        
    }

}

export default function (state = Map(), action) {
    switch (action.type) {
        case 'SET_STATE':
            return setState(state, action.state);
        case 'COMMENT':
            let { actionData } = action;
            return comment(state, actionData.comment, actionData.postId);
        case 'FETCH_POSTS':
            let { postId } = action.actionData;    
            return fetchPosts(state, postId);
    }
    return state;
}