class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.itemLength = 0
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.isOpen && nextProps.items.length !== this.itemLength) {
      this.itemLength = nextProps.items.length;
      return true;
    }

    if(!nextProps.isOpen && nextProps.items.length === 0) {
      return true;
    }

    this.itemLength = nextProps.items.length;
    return nextProps.isOpen;
  }

  render() {
    return (
      <CartView {...this.props} />
    );
  }
}
