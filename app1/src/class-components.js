import React, { Component } from "react";
//Only one class, so it can be exported as default
export default class Button extends Component {
  // constructor() {
  //   super();
  //   this.onClickButtonOK = this.onClickButtonOK.bind(this);
  // }
  showAlert(msg) {
    alert(msg);
  }
  onClickButtonOK =()=>{
    this.showAlert('Hello');
  }
  // onClickButtonOK() {
  //   //Event Handler as a Regular Function
  //   this.showAlert("Hello");
  // }
  render() {
    return <button onClick={this.onClickButtonOK}>OK</button>;
  }
}
