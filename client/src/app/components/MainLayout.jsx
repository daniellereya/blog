import React, { Component } from "react";
import Header from "./header/Header.jsx";
import Footer from "./footer/Footer.jsx";

export default class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      counter: 0,
      name: "Moshe",
      age: 15

    };
  }

  

  componentDidMount() {
    this.interval = setInterval(
      this.increment.bind(this),
      1000
    )
  }

  increment() {
    this.setState(({ counter }) => {
      return {counter: counter + 1};
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const { counter } = this.state;

    return (
      <div>
        <Header title="Daniel"/>
        <Footer/>
      </div>
    );
  }
}
