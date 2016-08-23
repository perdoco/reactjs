import React from 'react';
import {render} from 'react-dom';

import Module1 from './modules/mod1.jsx'
import Module2 from './modules/mod2.jsx'
import Module3 from './modules/mod3.jsx'

class Content extends React.Component {
  render () {
    return (
      <div>
        <h3>Body</h3>
        <Module1 />
        <Module2 />
        <Module3 />
      </div>
    )
  }
}

render(<Content />, document.getElementById('content'));