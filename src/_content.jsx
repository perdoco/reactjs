import Module1 from './modules/mod1.jsx'
import Module2 from './modules/mod2.jsx'
import Module3 from './modules/mod3.jsx'
import Clock from './modules/clock.jsx'

class Content extends React.Component {
  render () {
    return (
      <div>
        <h3>Header</h3>
        <Clock h="3" m="15" />
        <Module1 name="gdg" />
        <Module2 name="crf" />
        <Module3 name="xn" />
      </div>
    )
  }
}

ReactDOM.render(<Content />, document.getElementById('content'));