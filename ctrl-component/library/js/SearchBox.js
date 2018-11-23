class SearchBox extends React.Component{
  constructor(props) {
    super(props);
  }

  searchHandler(event) {
    this.props.filterBooks(event.currentTarget.value);
  }

  render() {
    return (
      <input type="text" placeholder="Поиск по названию или автору" value={this.props.value} onChange={this.searchHandler.bind(this)}/>
    );
  }
}