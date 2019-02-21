import React, { Component } from 'react';

const defaultMood = "happy"; 
 
class SimpleComponent extends Component {
  super()
  
  this.state = {
    mood: defaultMood
  }
  
  render() {
    return (
      <input
        className="field field-light"
        onChange={this.props.onChange}
        maxLength={this.props.limit || defaultLimit}
      />
    );
  }
}
