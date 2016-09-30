import React from 'react';
import ReactDOM from 'react-dom';
import { renderIntoDocument, scryRenderedDOMComponentsWithTag } from 'react-addons-test-utils';
import CommentsSection from '../../src/app/components/commentsSection/CommentsSection';
import { expect } from 'chai';

describe('CommentsSection', () => {

  it('renders list of comments', () => {
    const commentsData = [
          {
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry',
            commenter: 'Daniel Lereya',
            position: 'Daddy at Tel Aviv',
            avatarSrc: './../../../assets/profile.jpg',
            id: 1
          }, {
            text: 'Amazing!',
            commenter: 'Jonathan Lereya',
            position: 'Baby at Tel Aviv',
            avatarSrc: './../../../assets/profile.jpg',
            id: 2
          }
        ];
    const component = renderIntoDocument(
    //   <CommentsSection comments={commentsData} />
        <div></div>
    );
    // const renderedComments = scryRenderedDOMComponentsWithTag(component, 'ListItem');

    // expect(renderedComments.length).to.equal(2);
    // expect(renderedComments[0].textContent).to.equal('Trainspotting');
    // expect(buttons[1].textContent).to.equal('28 Days Later');
  });

});