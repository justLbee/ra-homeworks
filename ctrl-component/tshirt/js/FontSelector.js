// const FontSelector = ({fonts, selectedFont, onSelect}) => {
//
// };
//


class FontSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: this.selected
    }
  }

  fontHandler = (font, index) => {
    return (
      <div className="grid center font-item" key={index} onClick={(event) => this.fontSelectHandler(event, font)}>
        <input type="radio" name="fontType" value={font.name} id={font.name} />
        <label htmlFor={font.name} className="grid-1"/>
        <PictureFont text={font.name.substr(0,3)} path={font.path}/>
      </div>
    )
  };

  fontSelectHandler = (event, font) => {
    const checkedInput = event.currentTarget.querySelector('input');

    checkedInput.checked = true;

    this.props.selected = font;
    this.props.onSelect(this.props.selected);
  };

  render() {
    return (
      <div className="font-picker" >
        {this.props.fonts.map((font, index) => this.fontHandler(font, index))}
      </div>
    )
  }
}