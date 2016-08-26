export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { h:props.h?Number(props.h):0, m:props.m?Number(props.m):0, s:0 };
  }
  componentDidMount () {
    this.timer = setInterval(() => this.tick(), 25);
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
    this.setState({h: this.state.h, m: this.state.m, s: this.state.s});
  }
  resetClock () {
    this.setState({h: 0, m: 0, s: 0});
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
  render () {
    function fRotate (iDeg) {
      var sCSS = ("rotate(" + iDeg + "deg)");
      return { position:'absolute', top:0, left:0, MozTransform: sCSS, OTransform: sCSS, WebkitTransform: sCSS }
    }
    function pad(n, width, z) {
      z = z || '0';
      n = n + '';
      return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    }
    var hRotateStyle = fRotate(this.fGetHour());
    var mRotateStyle = fRotate(this.fGetMinute());
    const clockStyle = { position:'relative', height:250, width:250, zoom:.5 };
    const faceStyle = { position:'absolute', top:0, left:0 }
    return (
      <div className="panel panel-default">
        <div className="panel-heading">{pad(this.state.h,2)}:{pad(this.state.m,2)}:{pad(this.state.s,2)}
          <span onClick={() => this.resetClock()} className="btn btn-xs btn-default pull-right">Reset</span>
        </div>
        <div className="panel-body" style={clockStyle}>
          <img src="img/modules/clock/analog.gif" style={faceStyle} />
          <img src="img/modules/clock/analogminutes.png" style={mRotateStyle} />
          <img src="img/modules/clock/analoghours.png" style={hRotateStyle} />
        </div>
      </div>
    );
  }
};