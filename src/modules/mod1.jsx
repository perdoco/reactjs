import React from 'react';
import {render} from 'react-dom';

class Module1 extends React.Component {
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">Panel heading without title</div>
        <div className="panel-body">
          Panel content
        </div>
      </div>
    );
  }
}

module.exports = Module1;