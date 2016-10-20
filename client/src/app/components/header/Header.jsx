import { Component } from 'react';
import header from './header.scss';

export default class Header extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="header">
        <ImageAndText text={this.props.title} />
      </div>
    );
  }
}