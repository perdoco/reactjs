import React from 'react';
import {render} from 'react-dom';

function pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

class Clock extends React.Component {
  constructor() {
    super();
    this.state = {h: 0, m:0, s:0}
  }

  componentDidMount () {
    this.timer = setInterval(this.tick, 2500);
  }
  
  componentWillUnmount () {
      clearInterval(this.timer);
  }
  
  tick () {
      this.state.s += 15   ;
      if (this.state.s > 59) {
          this.state.s = 0;
          this.state.m +=1;
      }
      if (this.state.m > 59) {
          this.state.m = 0;
          this.state.h +=1;
      }
      if (this.state.h > 23) {
          this.state.h = 0;
      }
      if (this.isMounted()) {
          this.setState({h: this.state.h, m: this.state.m, s: this.state.s});
      }
  }
  resetClock () {
      if (this.isMounted()) {
          this.setState({h: 0, m: 0, s: 0});
      }

  }
  fGetHour () {
      var iHours = this.state.h;
      if (iHours > 11) {
          iHours -= 12
      }
      return Math.round((iHours * 30) + (this.state.m / 2) + (this.state.s / 120));
  }
  fGetMinute () {
      return Math.round((this.state.m * 6) + (this.state.s / 10));
  }
  fRotate (iDeg) {
      var sCSS = ("rotate(" + iDeg + "deg)");
      return { MozTransform: sCSS, OTransform: sCSS, WebkitTransform: sCSS }
  }

  render () {
      var hRotateStyle = this.fRotate(this.fGetHour());
      var mRotateStyle = this.fRotate(this.fGetMinute());
      var txtStyle = { fontSize: 32 };
      return (
          <div id="cssclock">
              <div style={txtStyle}>{pad(this.state.h,2)}:{pad(this.state.m,2)}:{pad(this.state.s,2)}
                  <span onClick={this.resetClock} className="btn btn-default pull-right">Reset</span>
              </div>
              <div id="clockanalog">
                  <img src="/images/clock/analogminutes.png" id="analogminute" style={mRotateStyle} />
                  <img src="/images/clock/analoghours.png" id="analoghour" style={hRotateStyle} />
              </div>
          </div>
      );
  }
};

module.exports = Clock;