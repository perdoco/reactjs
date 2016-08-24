import React from 'react';
import {render} from 'react-dom';

class RunFa extends React.Component {
  render () {
    return (
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">
                <img alt="Brand" src="..." />
              </a>
            </div>
          </div>
        </nav>
    )
  }
}

render(<RunFa />, document.getElementById('nav'));