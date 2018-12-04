class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fixed: false };
  }

  componentDidMount() {
    this.setPosition = this.setPosition.bind(this);
    window.addEventListener('scroll', this.setPosition);
  }

  componentWillUnmount() {
    window.removeEventListener(
      'scroll',
      this.setPosition
    );
  }

  render() {
    return <SearchBoxView fixed={this.state.fixed} />
  }

  isFixed() {
    if(ReactDOM.findDOMNode(this).getBoundingClientRect().top <= 0) {
      return true;
    }

    return false;
  }

  setPosition() {
    // console.log(this.isFixed());
    this.setState({
      fixed: this.isFixed()
    });
  }
}
