import { render } from "react-dom";
import React from "react";
import { Provider } from 'react-redux';
import { MainLayoutContainer } from "./components/MainLayout.jsx";
import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);
store.dispatch({
  type: 'SET_STATE',
  state: {
    posts: [ {
        id: 1,
        title: 'Blog 1',
        image: {
          src: './../../../assets/leadership_cover.jpg',
          caption: 'Some nice caption for blog 1'
        },
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br>' + 
        'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,<br>' +  
        'when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br>' + 
        'It has    survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br>' + 
        'It ws popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        comments: [
          {
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry',
            commenter: 'Daniel Lereya',
            position: 'Daddy at Tel Aviv',
            avatarSrc: './../../../assets/profile.jpg',
            id: 1
          },
          {
            text: 'Amazing!',
            commenter: 'Jonathan Lereya',
            position: 'Baby at Tel Aviv',
            avatarSrc: './../../../assets/profile.jpg',
            id: 2
          }]
         
        }]
  }
});
const containerEl = document.getElementById("main-container");

render(
  <Provider store={store}>
    <MainLayoutContainer/>
  </Provider>,
  containerEl
);
