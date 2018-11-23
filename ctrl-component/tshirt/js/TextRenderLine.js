// const TextRenderLine = ({value, onChange}) => {
//
// };

class TextRenderLine extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value: this.props.value
		};

		this.textHandler = this.textHandler.bind(this);
	}

  // textHandler = event => {
	// 	this.setState({
	// 		value: event.currentTarget.value
	// 	});
	//
	// 	this.props.onChange(this.state.value);
  //   console.log(event.currentTarget.value);
  // }

  textHandler(event) {
    this.setState({
      value: event.currentTarget.value
    });

    this.props.onChange(event.currentTarget.value);
    console.log(event.currentTarget.value);
	}

	render() {
    return (
      <div className="type-text">
        <textarea
					name="text"
					id="font-text"
					cols="30"
					rows="2"
					placeholder="Введите текст для футболки"
					value={this.state.value}
					onChange={this.textHandler}
				/>
      </div>
    );
	}
}