import React, { Component } from "react";
import footer from './footer.scss';
import { Button } from 'react-mdl';


export default class Footer extends Component {
  constructor(props) {
    super(props);
  }
   render() {

    return (
      <div className="footer">
        <div className="title">Footer</div>
        <Button raised>Button</Button>
        
      </div>
    );
  }
}