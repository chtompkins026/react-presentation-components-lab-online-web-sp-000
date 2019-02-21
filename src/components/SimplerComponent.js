import React from 'react';

const SimplerComponent = (props) =>
  <div
    className="field field-light"
    onChange={props.onChange}
    limit={props.limit || defaultLimit}
  />;