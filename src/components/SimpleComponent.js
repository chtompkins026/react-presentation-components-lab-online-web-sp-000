import React, { Component } from 'react';

class SimpleComponent extends Component {
  constructor(props) {
    super(props); 
    
    this.state = {
      mood: 'happy'
    }; 
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
