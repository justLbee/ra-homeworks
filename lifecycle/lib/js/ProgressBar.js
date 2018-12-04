class ProgressBar extends React.Component {
  constructor(props) {
    super(props);

    this.percentage = 0;

    this.data = {
      datasets: [{
        data: [50],
        backgroundColor: ['green']
      }]
    };
  }

  componentDidMount() {
    this.completness(this.props.total, this.props.completed);
  }

  componentWillReceiveProps(newProps) {
    this.completness(newProps.total, newProps.completed);
  }

  completness(total, completed) {
    const percentage = Math.round((completed / total) * 100);
    const angle = (2 * Math.PI * percentage) / 100;
    this.updateCanvas(percentage, angle)
  }

  updateCanvas(percentage = 0, angle) {
    const ctx = this.refs.canvas.getContext('2d');
    ctx.clearRect(0, 0, this.refs.canvas.width, this.refs.canvas.height);
    const middleX = ReactDOM.findDOMNode(this).getBoundingClientRect().width;
    const middleY = ReactDOM.findDOMNode(this).getBoundingClientRect().height / 2 + 30;

    ctx.beginPath();
    ctx.arc(middleX, middleY, 52, 0, 180);
    ctx.strokeStyle="#4ca89a";
    ctx.lineWidth=7;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(middleX, middleY, 45, 0, angle);
    ctx.strokeStyle="#96d6f4";
    ctx.lineWidth=7;
    ctx.stroke();

    let offsetX;

    if(percentage < 10) {
      offsetX = 20;
    }
    else if(percentage === 100) {
      offsetX = 30;
    }
    else {
      offsetX = 25;
    }

    ctx.font="27px Arial";
    ctx.fillText(`${percentage}%`, middleX - offsetX, middleY + 10);
  }

  render() {
    return (
      <canvas id="progressCanvas" className="progress" ref="canvas" />
    );
  }
}
