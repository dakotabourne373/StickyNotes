import React, { Component } from "react";
import UserNotes from "./UserNotes";
import "./style.css"

export default class App extends Component {
  render() {
    return (
      <div className="appRoot">
        <UserNotes />
      </div>
    );
  }
}