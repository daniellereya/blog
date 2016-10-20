import { List, Map, fromJS } from 'immutable';
import { expect } from 'chai';

import reducer from '../src/app/reducer';

describe('reducer', () => {

    it('handles SET_STATE', () => {
        const initialState = Map();
        const empty = Map({});
        const action = {
            type: 'SET_STATE',
            state: Map({
                posts: List.of(
                    Map({
                        id: 1,
                        title: 'Blog 1',
                        image: Map({
                            src: 'src1',
                            caption: 'Some nice caption for blog 1'
                        }),
                        content: 'Some nice content',
                        comments: List()
                    })
                )
            })
        };
        const nextState = reducer(initialState, action);
        expect(nextState).to.equal(fromJS({
            posts: [{
                id: 1,
                title: 'Blog 1',
                image: {
                    src: 'src1',
                    caption: 'Some nice caption for blog 1'
                },
                content: 'Some nice content',
                comments: [

                ]
            }]
        }));
    });


    it('handles SET_STATE with JS objects (not immutable)', () => {
        const initialState = Map();
        const action = {
            type: 'SET_STATE',
            state: {
                posts: [{
                    id: 1,
                    title: 'Blog 1',
                    image: {
                        src: './../../../assets/leadership_cover.jpg',
                        caption: 'Some nice caption for blog 1'
                    },
                    content: 'Some nice content',
                    comments: []
                }]
            }
        };

        const nextState = reducer(initialState, action);
        expect(nextState).to.equal(fromJS({
            posts: [{
                id: 1,
                title: 'Blog 1',
                image: {
                    src: './../../../assets/leadership_cover.jpg',
                    caption: 'Some nice caption for blog 1'
                },
                content: 'Some nice content',
                comments: [
                ]
            }]
        }));
    });

    it('handles SET_STATE with undefined initial state', () => {
        const action = {
            type: 'SET_STATE',
            state: {
                posts: [{
                    id: 1,
                    title: 'Blog 1',
                    image: {
                        src: './../../../assets/leadership_cover.jpg',
                        caption: 'Some nice caption for blog 1'
                    },
                    content: 'Some nice content',
                    comments: []
                }]
            }
        };

        const nextState = reducer(undefined, action);
        expect(nextState).to.equal(fromJS({
            posts: [{
                id: 1,
                title: 'Blog 1',
                image: {
                    src: './../../../assets/leadership_cover.jpg',
                    caption: 'Some nice caption for blog 1'
                },
                content: 'Some nice content',
                comments: [
                ]
            }]
        }));
    });


    it('handles COMMENT', () => {
        const initialState = Map({
            posts: List.of(
                Map({
                    id: 1,
                    title: 'Blog 1',
                    image: Map({
                        src: 'src1',
                        caption: 'Some nice caption for blog 1'
                    }),
                    content: 'Some nice content',
                    comments: List()
                })
            )
        });
        const action = {
            type: 'COMMENT',
            actionData: {
                postId: 1,
                comment: {
                    commenter: 'daniel',
                    text: 'new test comment',
                    position: 'test position',
                    avatarSrc: 'test_src.jpg',
                    id: 1
                }
            }
        };

        const nextState = reducer(initialState, action);
        expect(nextState).to.equal(fromJS({
            posts: [{
                id: 1,
                title: 'Blog 1',
                image: {
                    src: 'src1',
                    caption: 'Some nice caption for blog 1'
                },
                content: 'Some nice content',
                comments: [{
                        text: 'new test comment',
                        commenter: 'daniel',
                        position: 'test position',
                        avatarSrc: 'test_src.jpg',
                        id: 1
                    }
                ]
            }]
        }));
    });


});