export function setState(state) {
    return {
        type: 'SET_STATE',
        state
    };
}

export function comment(comment, postId) {
    const actionData = {
        comment: comment,
        postId: postId
    };
    return {
        type: 'COMMENT',
        actionData
    };
}

export function fetchPosts(postId = null) {
    return {
        type: 'FETCH_POSTS',
        postId: postId
    };
}